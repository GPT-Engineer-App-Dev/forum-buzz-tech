import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const threads = [
  {
    id: 1,
    title: "How to learn React?",
    author: "John Doe",
    replies: 12,
    lastUpdated: "2023-10-01T12:34:56Z",
  },
  {
    id: 2,
    title: "Best practices for Node.js",
    author: "Jane Smith",
    replies: 8,
    lastUpdated: "2023-10-02T14:20:30Z",
  },
  // Add more threads as needed
];

const Index = () => {
  const [filteredThreads, setFilteredThreads] = useState(threads);

  const handleCreateThread = () => {
    // Logic to open modal for creating a new thread
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Forum Threads</h1>
        <Button onClick={handleCreateThread}>Create New Thread</Button>
      </div>
      <div className="grid gap-4">
        {filteredThreads.map((thread) => (
          <Card key={thread.id}>
            <CardHeader>
              <CardTitle>{thread.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Author: {thread.author}</p>
              <p>Replies: {thread.replies}</p>
              <p>Last Updated: {new Date(thread.lastUpdated).toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
