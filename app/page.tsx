import { Hero } from "@/components/Hero"

export default function Home() {
  const greetingMessages = ['Nice to see you here!', 'Welcome!', 'Nice to have you back!', 'Good to see you again!', 'Welcome back!'];
  const randomIndex = Math.floor(Math.random() * greetingMessages.length);
  return (
    <>
      <Hero greetingMessage={greetingMessages[randomIndex]}/>
    </>
  )
}
