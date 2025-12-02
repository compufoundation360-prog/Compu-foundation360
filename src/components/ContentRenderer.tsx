import React from "react";
import { Card } from "@/components/ui/card";
import { FlowchartComponent } from "./FlowchartComponent";
import { VisualFlowchart } from "./VisualFlowchart";
import { BlockDiagram } from "./BlockDiagram";
import { ComparisonChart } from "./ComparisonChart";
import { AudioPlayer } from "./AudioPlayer";
import { VideoPlayer } from "./VideoPlayer";
import { ImageCard } from "./ImageCard";
import { ContentSection } from "@/data/lessons";
import { getIllustration } from "@/data/illustrations";

interface ContentRendererProps {
  section: ContentSection;
  illustrationKey?: string;
}

const IllustrationWrapper: React.FC<{ 
  illustrationKey?: string; 
  className?: string;
}> = ({ illustrationKey, className = "" }) => {
  if (!illustrationKey) return null;
  
  const Illustration = getIllustration(illustrationKey);
  if (!Illustration) return null;
  
  return (
    <div className={`flex items-center justify-center w-full h-full ${className}`}>
      <Illustration width={600} height={500} className="max-w-full h-auto w-full" />
    </div>
  );
};

export const ContentRenderer = ({ section, illustrationKey }: ContentRendererProps) => {
  switch (section.type) {
    case 'text':
      return (
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-stretch">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col">
            {section.title && (
              <h3 className="text-xl font-bold text-foreground mb-4">{section.title}</h3>
            )}
            <p className="text-lg text-foreground leading-relaxed flex-1">
              {section.data.highlight ? (
                <>
                  {section.data.text.split(section.data.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <strong className="text-primary">{section.data.highlight}</strong>
                      )}
                    </span>
                  ))}
                </>
              ) : (
                section.data.text
              )}
            </p>
          </Card>
          {section.data.audio ? (
            <AudioPlayer title={section.data.audioTitle || section.title} />
          ) : section.data.illustration ? (
            <Card className="p-6 bg-card flex items-center justify-center h-full">
              <IllustrationWrapper illustrationKey={illustrationKey || section.data.illustration} className="w-full h-full" />
            </Card>
          ) : null}
        </div>
      );

    case 'card':
      return (
        <div className="space-y-6">
          {section.title && (
            <h3 className="text-2xl font-bold text-foreground mb-6">{section.title}</h3>
          )}
          <div className="space-y-6">
            {section.data.cards?.map((card: any, index: number) => (
              <ImageCard 
                key={index} 
                card={card} 
                index={index} 
                alternateLayout={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      );

    case 'flowchart':
      return (
        <div>
          {section.title && (
            <h3 className="text-2xl font-bold text-foreground mb-6">{section.title}</h3>
          )}
          <VisualFlowchart
            title={undefined}
            steps={section.data.steps.map((step: any) => ({
              id: step.id,
              label: step.label,
              description: step.description,
              icon: step.icon,
              color: step.id === "input" ? "bg-primary text-primary-foreground" :
                     step.id === "process" || step.id === "processing" ? "bg-secondary text-secondary-foreground" :
                     step.id === "output" ? "bg-accent text-accent-foreground" :
                     "bg-success text-success-foreground"
            }))}
            layout={section.data.layout || "horizontal"}
          />
        </div>
      );

    case 'block-diagram':
      // Get image URL for block diagram - same method as ImageCard
      const getBlockDiagramImageUrl = (imageName: string) => {
        try {
          return new URL(`../assets/module-media/${imageName}`, import.meta.url).href;
        } catch {
          return `/src/assets/module-media/${imageName}`;
        }
      };
      
      return (
        <div>
          {section.title && (
            <h3 className="text-2xl font-bold text-foreground mb-6">{section.title}</h3>
          )}
          <Card className="p-0 overflow-hidden bg-card">
            <img 
              src={getBlockDiagramImageUrl("blog-diagram.jpg")} 
              alt="Block Diagram of a Computer System"
              className="w-full h-auto object-contain"
            />
          </Card>
        </div>
      );

    case 'comparison':
      return (
        <div>
          {section.title && (
            <h3 className="text-2xl font-bold text-foreground mb-6">{section.title}</h3>
          )}
          {section.data.advantages && section.data.limitations ? (
            <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-8 items-stretch">
              <Card className="p-8 flex flex-col">
                {section.data.title && (
                  <h4 className="text-xl font-bold text-foreground mb-6">{section.data.title}</h4>
                )}
                <div className="grid md:grid-cols-2 gap-8 flex-1">
                  <div>
                    <h5 className="text-lg font-bold text-success mb-4 flex items-center gap-2">
                      <span>✅</span>
                      <span>Advantages</span>
                    </h5>
                    <ul className="space-y-3">
                      {section.data.advantages.map((item: string, i: number) => (
                        <li key={i} className="text-base text-foreground flex items-start gap-3">
                          <span className="text-success mt-1 text-lg font-bold flex-shrink-0">✓</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-destructive mb-4 flex items-center gap-2">
                      <span>❌</span>
                      <span>Limitations</span>
                    </h5>
                    <ul className="space-y-3">
                      {section.data.limitations.map((item: string, i: number) => (
                        <li key={i} className="text-base text-foreground flex items-start gap-3">
                          <span className="text-destructive mt-1 text-lg font-bold flex-shrink-0">✗</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
              {section.data.illustration && (
                <Card className="p-8 flex items-center justify-center bg-card">
                  <IllustrationWrapper illustrationKey={illustrationKey || section.data.illustration} className="w-full h-full" />
                </Card>
              )}
            </div>
          ) : section.data.items ? (
            section.data.illustration ? (
              <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 items-center">
                <div className="w-full">
                  <ComparisonChart
                    title={section.data.title}
                    items={section.data.items}
                    type={section.data.items[0]?.task ? "speed" : "table"}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <IllustrationWrapper illustrationKey={illustrationKey || section.data.illustration} className="w-full" />
                </div>
              </div>
            ) : (
              <div className="w-full">
                <ComparisonChart
                  title={section.data.title}
                  items={section.data.items}
                  type={section.data.items[0]?.task ? "speed" : "table"}
                />
              </div>
            )
          ) : null}
        </div>
      );

    case 'list':
      return (
        <Card className="p-6">
          {section.title && (
            <h3 className="text-xl font-bold text-foreground mb-4">{section.title}</h3>
          )}
          <ul className="space-y-3">
            {section.data.items?.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-foreground">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-success text-sm font-bold">✓</span>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      );

    case 'video':
      return (
        <VideoPlayer 
          title={section.title || section.data.title}
          description={section.data.description}
          embedUrl={section.data.embedUrl}
          embedHtml={section.data.embedHtml}
        />
      );

    case 'model':
      return (
        <Card className="p-0 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
          {section.title && (
            <div className="p-6 pb-4">
              <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
            </div>
          )}
          {/* 3D Model on Top */}
          <div className="relative w-full aspect-video bg-gradient-to-br from-muted/30 to-muted/10">
            <div 
              className="w-full h-full [&_.sketchfab-embed-wrapper]:w-full [&_.sketchfab-embed-wrapper]:h-full [&_iframe]:w-full [&_iframe]:h-full [&_p]:hidden"
              dangerouslySetInnerHTML={{ __html: section.data.embedHtml }}
            />
          </div>
          {/* Text Below Model */}
          <div className="p-6 pt-4">
            <div className="text-lg text-foreground leading-relaxed whitespace-pre-line">
              {section.data.text}
            </div>
          </div>
        </Card>
      );

    default:
      return null;
  }
};

