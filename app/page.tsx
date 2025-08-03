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
import { ArrowDown, Download } from 'lucide-react'
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
        <div className="flex flex-col justify-center items-center w-full py-20 md:px-0 px-10">
          
        <Card className=" border-1 border-zinc-700 bg-zinc-900 w-full max-w-lg mx-auto mt-10  text-zinc-200 rounded-3xl relative">
          <h1 className="md:text-3xl text-xl font-medium absolute md:-top-15 -top-10 text-center w-full ">What do you want to Download?</h1>
          <CardContent className="!px-2">
            <form >
              <div className="flex flex-col gap-6">
                <div className="flex w-full items-center gap-2">
                  
                  <Input 
                    className="font-[400] !px-1 md:text-base text-sm border-none outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 hover:outline-none active:outline-none bg-transparent" 
                    type="url" 
                    placeholder ="www.youtube.com/?watch" 
                    required
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    size="icon"
                    className="bg-white text-black hover:bg-gray-200 rounded-xl h-12 w-12">
                    <ArrowDown className="h-5 w-5" />
                  </Button>
                </div>
      
                <div className="space-y-3 mt-2">
                  <h3 className="text-sm font-medium text-gray-300 px-2">Time Range</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input
                        className="w-full !border-0 !outline-0 !ring-0 focus:!ring-0 focus-visible:!ring-0 bg-zinc-800/50 text-white placeholder:text-gray-400 rounded-xl py-3"
                        placeholder="00:00:00"
                        type="text"
                      />
                    </div>
                    <span className="text-gray-400 font-medium">to</span>
                    <div className="flex-1">
                      <Input
                        className="w-full !border-0 !outline-0 !ring-0 focus:!ring-0 focus-visible:!ring-0 bg-zinc-800/50 text-white placeholder:text-gray-400 rounded-xl py-3"
                        placeholder="00:00:00"
                        type="text"
                      />
                    </div>
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
