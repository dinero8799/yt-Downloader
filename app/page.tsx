import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function Home() {
  return (
    <>
      <div className="w-full flex items-center text-white text-2xl px-3 py-2">
        <img className="h-full w-10 cover" src='/logo.png' alt="" />
        <h1>YT-DOWNLOADER</h1>
      </div>
      <div className="flex justify-center ">
        <Card className="border-1 border-zinc-700 bg-zinc-950 w-1/2 mt-10 text-zinc-200">
          <CardHeader >
            <CardTitle className=" flex justify-center text-white text-2xl">YT-DOWNLOADER</CardTitle>
            <CardDescription className="flex justify-center">Download Yt Videos here.</CardDescription>
            <CardAction>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form >
              <div className="flex flex-col gap-6">
                <div className="flex w-full items-center gap-2">
                  <Input className="dark" type="link" placeholder="www.youtube.com/?watch" />
                  <Button type="submit" variant="default">
                    Search
                  </Button>
                </div>
                <div className= "w-full flex justify-between ">
                  <div className="flex">
                    <Label htmlFor="email">Start Time:</Label>
                    <Input
                      className="w-1/3 mx-1 dark"
                      id="yt-link"
                      placeholder="0:00"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <Label htmlFor="email">End Time:</Label>
                    <Input
                      className="w-1/3 mx-1 dark"
                      id="yt-link"
                      placeholder="0:00"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="w-full flex justify-between">
            <Button variant="secondary" className="w-1/3">
              Download
            </Button>
            <div className="w-1/3">
              <Select>
                <SelectTrigger className="w-full dark">
                  <SelectValue placeholder="Select Quality" />
                </SelectTrigger>
                <SelectContent className="dark">
                  <SelectGroup className="dark">
                    <SelectLabel>Quality</SelectLabel>
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="720p">720p</SelectItem>
                    <SelectItem value="480p">480p</SelectItem>
                    <SelectItem value="144p">144p</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            
          </CardFooter>
        </Card>
      </div>
    </>
    
    
  );
}
