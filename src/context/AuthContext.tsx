import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextType {
    currentUser: User | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const SESSION_DURATION_MS = 5 * 24 * 60 * 60 * 1000; // 5 days

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Check session expiration
                const sessionStartStr = localStorage.getItem('sessionStart');
                const now = Date.now();

                if (sessionStartStr) {
                    const sessionStart = parseInt(sessionStartStr, 10);
                    if (now - sessionStart > SESSION_DURATION_MS) {
                        // Session expired
                        console.log("Session expired (5 days). Logging out.");
                        await auth.signOut();
                        localStorage.removeItem('sessionStart');
                        setCurrentUser(null);
                        setLoading(false);
                        return;
                    }
                } else {
                    // Start new session (or strictly, this might be a fresh login on a new device/browser, 
                    // so we mark this as start. If we wanted absolute "5 days since first login ever", we'd trust the token, 
                    // but Firebase handles token validity. User request implies "no login process ... more than 5 days" 
                    // which usually means "stay logged in for 5 days".)
                    localStorage.setItem('sessionStart', now.toString());
                }

                setCurrentUser(user);
            } else {
                // User logged out
                localStorage.removeItem('sessionStart');
                setCurrentUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
