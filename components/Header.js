import {ConnectButton} from "web3uikit"

export default function Header() {
    return (
        <nav>
            <h1 className="text-center bg-gray-300 text-white font-bold text-2xl py-4 mb-5">Vietlot Decentralized - Admin: Blake Nguyen</h1>
            <div className="flex flex-row">
                <h2 className="py-2 ml-6 border-green-400">So du tai khoan</h2>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}