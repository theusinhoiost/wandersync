"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const notifications = [
  "Anna joined your trip to Tokyo",
  "Flight details updated",
  "New comment on your itinerary",
];

export default function ActivityNotifications() {
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {notifications.map((n, i) => (
          <div
            key={i}
            className="border rounded-lg p-3 hover:bg-accent transition"
          >
            {n}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
