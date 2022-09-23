export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-base-200">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">DanBot Portal</h2>
          <button className="btn btn-primary mt-6" onClick={() => window.location.href = "https://danbot.host"}>Main Website</button>
          <button className="btn btn-primary mt-6" onClick={() => window.location.href = "https://panel.danbot.host"}>Game Panel</button>
          <button className="btn btn-primary mt-6" onClick={() => window.location.href = "https://discord.gg/dzeMuFPPxx"}>Discord Server</button>
          <button className="btn btn-primary mt-6" disabled>DBH VPN (Coming Soon)</button>
        </div>
      </div>
    </div>
  )
}
