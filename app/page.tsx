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
    <div className="flex flex-col min-h-screen">
      <div className="w-full flex items-center text-white text-2xl px-3 py-2">
        <img className="h-full w-10 cover" src='/logo.png' alt="" />
        <h1>YT-DOWNLOADER</h1>
      </div>
        <div className="flex flex-col justify-center items-center w-full py-20">
          
        <Card className=" border-1 border-zinc-700 bg-zinc-900 w-full max-w-lg mx-auto mt-10 text-zinc-200 rounded-3xl relative">
          <h1 className="md:text-3xl text-xl font-medium absolute md:-top-15 -top-10 text-center w-full ">What do you want to Download?</h1>
          <CardContent>
            <form >
              <div className="flex flex-col gap-6">
                <div className="flex w-full items-center gap-2">
                  <Input 
                    className="font-medium text-2xl border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:outline-none active:outline-none bg-transparent" 
                    type="url" 
                    placeholder ="www.youtube.com/?watch" 
                    required
                  />
                  <Button type="submit" variant="secondary" >
                    Search
                  </Button>
                </div>
                <div className= "w-full flex justify-between items-center ">
                  <div className="w-5/11">
                    <Input
                      className="w-full mx-1 dark mt-1 bg-zinc-800 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                      id="start-time"
                      placeholder="0:00"
                      type="number"
                      required
                    />
                  </div>
                  <h1>to</h1>
                  <div className="w-5/11 flex flex-col items-end ">
                    <Input
                      className="w-full mx-1 dark mt-1 bg-zinc-800 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                      id="end-time"
                      placeholder="0:00"
                      type="number"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="w-full flex justify-between">
            <Button variant="secondary" className="w-max">
              Download
            </Button>
            <div className="w-max">
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
    </div>
    
    
  );
}
