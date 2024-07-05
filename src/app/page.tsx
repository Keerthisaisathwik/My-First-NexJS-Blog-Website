import {
  Card,
  CardHeader,
  CardFooter,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface Student {
  ID: String;
  Name: String;
  Gender: String;
  Class: String;
  Seat: String;
  Club: String;
  Persona: String;
  Crush: String;
  BreastSize: String;
  Strength: String;
  Hairstyle: String;
  Color: String;
  Eyes: String;
  EyeType: String;
  Stockings: String;
  Accessory: String;
  ScheduleTime: String;
  ScheduleDestination: String;
  ScheduleAction: String;
  Info: String;
}

async function getData(): Promise<Student[]> {
  const result = await fetch(
    "https://keerthisaisathwik.github.io/Json/black.json",
  );
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  return result.json();
}

export default async function Home() {
  const students = await getData();
  // src={`../profile-photos/pic${student.ID}.jpg`}
  return (
    <main>
      <h1 className="text-center">Students Details cards</h1>
      <div className="mt-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <div>
            <Card>
              <CardHeader>
                <div className="bg-gray-600 text-white">
                  {student.Name} INFO
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between">
                  <div className="h-24 w-24 rounded-full">
                    <Avatar>
                      <AvatarImage
                        src={`../profile-photos/pic${student.ID}.jpg`}
                        alt="@shadcn"
                        className="h-24 w-24 rounded-full"
                      />
                      <AvatarFallback className="inline-block rounded-full bg-gray-500 p-8 text-2xl">
                        {student.Name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4>Name: {student.Name}</h4>
                    <h4>Class: {student.Class}</h4>
                    <h4>Gender: {student.Gender == "1" ? "Male" : "Female"}</h4>
                  </div>
                </div>
              </CardContent>
              <CardDescription>
                Info:{" "}
                {student.Info.length > 0
                  ? student.Info.length > 60
                    ? student.Info.slice(0, 60)
                    : student.Info
                  : "NA"}
              </CardDescription>
              <CardFooter>
                <Dialog>
                  <DialogTrigger className="rounded-md bg-secondary p-2 text-secondary-foreground hover:bg-secondary/80">
                    Read more
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>About {student.Name}</DialogTitle>
                      <DialogDescription className="">
                        <Avatar>
                          <AvatarImage
                            src={`../profile-photos/pic${student.ID}.jpg`}
                            alt="@shadcn"
                            className="m-4 size-48"
                          />
                          <AvatarFallback>
                            <div className="mb-10 ml-5 mt-5 size-36">
                              <FontAwesomeIcon icon={faUser} />
                            </div>
                          </AvatarFallback>
                        </Avatar>
                        <ScrollArea className="h-96 rounded-md border p-4">
                          <h3>
                            <strong>ID:</strong> {student.ID}
                          </h3>
                          <h3>
                            <strong>Name:</strong> {student.Name}
                          </h3>
                          <h3>
                            <strong>Gender:</strong>{" "}
                            {student.Gender == "1" ? "male" : "female"}
                          </h3>
                          <h3>
                            <strong>Class:</strong> {student.Class}
                          </h3>
                          <h3>
                            <strong>Seat:</strong> {student.Seat}
                          </h3>
                          <h3>
                            <strong>Club:</strong> {student.Club}
                          </h3>
                          <h3>
                            <strong>Persona:</strong> {student.Persona}
                          </h3>
                          <h3>
                            <strong>Crush:</strong> {student.Crush}
                          </h3>
                          <h3>
                            <strong>BreastSize:</strong> {student.BreastSize}
                          </h3>
                          <h3>
                            <strong>Strength:</strong> {student.Strength}
                          </h3>
                          <h3>
                            <strong>Hairstyle:</strong> {student.Hairstyle}
                          </h3>
                          <h3>
                            <strong>Color:</strong> {student.Color}
                          </h3>
                          <h3>
                            <strong>Eyes:</strong> {student.Eyes}
                          </h3>
                          <h3>
                            <strong>EyeType:</strong> {student.EyeType}
                          </h3>
                          <h3>
                            <strong>Stockings:</strong> {student.Stockings}
                          </h3>
                          <h3>
                            <strong>Accessory:</strong> {student.Accessory}
                          </h3>
                          <h3>
                            <strong>ScheduleTime:</strong>{" "}
                            {student.ScheduleTime}
                          </h3>
                          <h3>
                            <strong>ScheduleDestination:</strong>{" "}
                            {student.ScheduleDestination.replaceAll("_", " ")}
                          </h3>
                          <h3>
                            <strong>ScheduleAction:</strong>{" "}
                            {student.ScheduleAction.replaceAll("_", " ")}
                          </h3>
                          <h3>
                            <strong>Info:</strong> {student.Info}
                          </h3>
                        </ScrollArea>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}
