import { chatapp, ujjwal } from "../assets";
import { PinContainer } from "./ui/3D-pin";

export function AnimatedPinDemo() {
    return (
        <div className="h-[40rem] max-sm:h-[120rem] w-full flex items-center max-sm:flex-col justify-center max-sm:mt-60">
            <PinContainer title="/syncronus-chat-application.netlify.app" href="https://syncronus-chat-application.netlify.app/">
                <div
                    className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[21rem] h-[30rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        Syncronus Chat Web App
                    </h3>
                    <div className="text-base !m-0 !pb-2 font-normal">
                        <p className="text-slate-500 !pb-2">
                            Developed a real-time chat app with WebSockets, JWT auth, media sharing, and Gemini AI for interactive user engagement.
                        </p>
                    </div>

                    <div>
                        <img src={chatapp} alt="" />
                    </div>

                    <div className="pt-2">
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">React</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Shadcn</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Socket.io</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Node</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Express</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">MongoDB</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Gemini</button>
                    </div>
                </div>
            </PinContainer>

            <PinContainer title="/shreyas-videocall-app.netlify.app" href="https://shreyas-videocall-app.netlify.app/" target="_blank">
                <div
                    className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[21rem] h-[30rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        Live RTC Application
                    </h3>
                    <div className="text-base !m-0 !pb-2 font-normal">
                        <p className="text-slate-500 !pb-2">
                            Built a peer-to-peer video calling app using WebRTC and Socket.io for seamless, real-time audio and video communication.
                        </p>
                    </div>

                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />

                    <div className="!pt-2">
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">React</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Material UI</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Web RTC</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Node.js</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Express.js</button>
                    </div>

                </div>
            </PinContainer>

            <PinContainer title="/ujjwalengineers.com" href="https://ujjwalengineers.com/">
                <div
                    className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/10 w-[21rem] h-[30rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        Ujjwal Engineers & Environmental Services
                    </h3>
                    <div className="text-base !m-0 !pb-2 font-normal">
                        <p className="text-slate-500 !pb-2">
                            Designed and built a fully responsive React website optimized for all devices, with high performance and enhanced SEO.
                        </p>
                    </div>

                    <div>
                        <img src={ujjwal} alt="" />
                    </div>

                    <div className="pt-2">
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">HTML</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">CSS</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">React</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Email.js</button>
                        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Lighthouse</button>
                    </div>

                </div>
            </PinContainer>
        </div>
    );
}