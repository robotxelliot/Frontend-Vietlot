import { useEffect } from "react"
import { useMoralis } from "react-moralis"

export default function ManualHeader() {
    
    const {enableWeb3, account, isWeb3EnableLoading} = useMoralis()
    // useEffect()

    return (
        <nav className="p-5 border-b-2">
            <ul className="">
                <li className="flex flex-row">
                    {account ? (
                        <div className="ml-auto py-2 px-4">
                            Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                        </div>
                    ) : (
                        <button onClick = {async () => {
                            const ret = await enableWeb3()
                            if (typeof ret !== "undefined") {
                                if(typeof window !== "undefined") {
                                    window.localStorage.setItem("connected", "injected")
                                }
                            }
                        }}
                        disabled={isWeb3EnableLoading}
                        className="bg-blue-500 hover:bg0blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
                        >
                            Connect
                        </button>
                    )}
                </li>
            </ul>
        </nav>
    )
}