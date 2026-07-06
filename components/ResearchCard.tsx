import { ResearchTopic } from "@/data/researchTopics";

export default function ResearchCard({ topic }: { topic: ResearchTopic }) {
  return (
    <div className="rounded-lg border p-5 bg-card">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        {topic.category}
      </span>
      <h3 className="font-medium mt-1 mb-2">{topic.title}</h3>
      <p className="text-sm text-muted-foreground">{topic.summary}</p>
    </div>
  );
}
