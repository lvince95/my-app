/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KQthES4ohlh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  const jobSkills = [
    { name: "JavaScript", rating: 4 },
    { name: "React", rating: 5 },
    { name: "Node.js", rating: 3 },
    { name: "SQL", rating: 4 },
    { name: "AWS", rating: 3 },
  ];
  const candidates = [
    {
      name: "John Doe",
      skills: [
        { name: "JavaScript", rating: 5 },
        { name: "React", rating: 4 },
        { name: "Node.js", rating: 4 },
        { name: "SQL", rating: 3 },
        { name: "AWS", rating: 2 },
      ],
      totalScore: 18,
    },
    {
      name: "Jane Smith",
      skills: [
        { name: "JavaScript", rating: 4 },
        { name: "React", rating: 5 },
        { name: "Node.js", rating: 4 },
        { name: "SQL", rating: 4 },
        { name: "AWS", rating: 3 },
      ],
      totalScore: 20,
    },
    {
      name: "Bob Johnson",
      skills: [
        { name: "JavaScript", rating: 4 },
        { name: "React", rating: 4 },
        { name: "Node.js", rating: 3 },
        { name: "SQL", rating: 4 },
        { name: "AWS", rating: 4 },
      ],
      totalScore: 19,
    },
    {
      name: "Sarah Lee",
      skills: [
        { name: "JavaScript", rating: 3 },
        { name: "React", rating: 4 },
        { name: "Node.js", rating: 4 },
        { name: "SQL", rating: 5 },
        { name: "AWS", rating: 3 },
      ],
      totalScore: 19,
    },
  ];
  const sortedCandidates = candidates.sort(
    (a, b) => b.totalScore - a.totalScore,
  );
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <div className="grid gap-8">
        <div>
          <h1 className="text-3xl font-bold">Senior Frontend Developer</h1>
          <p className="text-muted-foreground">
            We are looking for an experienced frontend developer to join our
            growing team.
          </p>
        </div>
        <div className="grid gap-4">
          <h2 className="text-2xl font-semibold">Required Skills</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-background rounded-lg p-4 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{skill.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {skill.rating}/5
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <h2 className="text-2xl font-semibold">Matching Candidates</h2>
          <div className="grid gap-4">
            {sortedCandidates.map((candidate) => (
              <Card key={candidate.name} className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-row gap-2">
                    <h3 className="text-xl font-semibold">{candidate.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <div className="bg-primary rounded-full px-2 py-1 text-primary-foreground">
                          {candidate.totalScore}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">View Profile</Button>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {candidate.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-background rounded-lg p-4 shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{skill.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {skill.rating}/5
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
