"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AccountPage() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>My Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Name" defaultValue="Matheus Iost" />
        <Input placeholder="Email" defaultValue="matheus@wandersync.com" />
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  );
}
