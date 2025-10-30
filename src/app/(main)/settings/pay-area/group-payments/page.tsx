"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GroupPaymentsPage() {
  const groups = [
    { trip: "Patagonia 2025", amount: "R$ 420,00", status: "Pending" },
    { trip: "Lisbon Meetup", amount: "R$ 210,00", status: "Paid" },
  ];

  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Group Payments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {groups.map((g, i) => (
          <div
            key={i}
            className="flex items-center justify-between border p-3 rounded-lg"
          >
            <div>
              <strong>{g.trip}</strong>
              <p className="text-sm text-muted-foreground">{g.amount}</p>
            </div>
            <Button variant={g.status === "Paid" ? "outline" : "default"}>
              {g.status}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
