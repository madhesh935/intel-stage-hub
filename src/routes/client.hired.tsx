import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/DashboardShell";
import { FreelancerCard } from "@/components/FreelancerCard";
import { freelancers } from "@/data/mock";

export const Route = createFileRoute("/client/hired")({
  head: () => ({ meta: [{ title: "Hired freelancers — TalentStage" }] }),
  component: () => (
    <DashboardShell variant="client" title="Hired freelancers" subtitle="People currently on your team.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {freelancers.slice(0, 4).map((f, i) => <FreelancerCard key={f.id} f={f} index={i} />)}
      </div>
    </DashboardShell>
  ),
});
