"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SubscriptionPage() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Subscription</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p>
          Current Plan: <strong>WanderSync Pro</strong>
        </p>
        <p>
          Next billing date: <strong>Dec 15, 2025</strong>
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel Plan</Button>
        <Button>Upgrade</Button>
      </CardFooter>
    </Card>
  );
}
