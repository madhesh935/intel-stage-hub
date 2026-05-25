import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { FreelancerCard } from "@/components/FreelancerCard";
import { freelancers } from "@/data/mock";

export const Route = createFileRoute("/client/saved")({
  head: () => ({ meta: [{ title: "Saved freelancers — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="client" title="Saved freelancers" subtitle="Shortlists for upcoming projects.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {freelancers.slice(2).map((f, i) => <FreelancerCard key={f.id} f={f} index={i} />)}
      </div>
    </DashboardShell>
  ),
});
