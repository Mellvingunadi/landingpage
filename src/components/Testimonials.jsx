import React from "react";
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Hear from our satisfied customers about their experience with
            Modularity Solution.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-bold">John Doe</h4>
                <p className="text-muted-foreground">CEO, Acme Corp</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-4">
              "Acme Inc. has been a game-changer for our business. Their\n
              products and services have helped us streamline our\n operations
              and drive growth."
            </p>
          </Card>
          <Card className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-bold">Sarah Miller</h4>
                <p className="text-muted-foreground">
                  Marketing Manager, Acme Corp
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-4">
              "I've been working with Acme Inc. for years, and their\n
              commitment to customer satisfaction is unparalleled. They\n always
              go the extra mile to ensure our success."
            </p>
          </Card>
          <Card className="bg-background rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>TW</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-lg font-bold">Tom Wilson</h4>
                <p className="text-muted-foreground">IT Manager, Acme Corp</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-4">
              "Acme Inc.'s products and services have been instrumental in\n
              helping us streamline our IT infrastructure and improve\n
              efficiency across the organization."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
