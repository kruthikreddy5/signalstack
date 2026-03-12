export default function Home() {
return (
<main style={{
background:"#07070a",
color:"#fff",
minHeight:"100vh",
fontFamily:"Inter, Arial",
padding:"60px",
lineHeight:"1.6"
}}>

  {/* NAVBAR */}
  <div style={{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"80px"
  }}>
    <h2 style={{letterSpacing:"4px"}}>SIGNALSTACK</h2>

    <div>
      <button style={{
        background:"transparent",
        color:"#aaa",
        border:"none",
        marginRight:"20px",
        cursor:"pointer"
      }}>Models</button>

      <button style={{
        background:"transparent",
        color:"#aaa",
        border:"none",
        marginRight:"20px",
        cursor:"pointer"
      }}>Insights</button>

      <button style={{
        background:"#fff",
        color:"#000",
        padding:"10px 18px",
        borderRadius:"10px",
        border:"none",
        fontWeight:"bold",
        cursor:"pointer"
      }}>Get Access</button>
    </div>
  </div>

  {/* HERO */}
  <h1 style={{
    fontSize:"72px",
    maxWidth:"800px",
    marginBottom:"20px"
  }}>
    Upgrade your thinking system.
  </h1>

  <p style={{
    color:"#999",
    maxWidth:"600px",
    marginBottom:"60px"
  }}>
    SignalStack is a premium library of mental models, decision tools,
    and high-signal insights for ambitious people who want sharper judgment
    and long-term leverage.
  </p>

  {/* FEATURE CARDS */}
  <div style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
    gap:"20px",
    marginBottom:"100px"
  }}>

    <div style={{
      background:"#111",
      padding:"25px",
      borderRadius:"18px"
    }}>
      <h3>Inversion</h3>
      <p style={{color:"#aaa"}}>
        Ask how this could fail before asking how it could succeed.
      </p>
    </div>

    <div style={{
      background:"#111",
      padding:"25px",
      borderRadius:"18px"
    }}>
      <h3>Opportunity Cost</h3>
      <p style={{color:"#aaa"}}>
        Every decision eliminates other paths. Choose consciously.
      </p>
    </div>

    <div style={{
      background:"#111",
      padding:"25px",
      borderRadius:"18px"
    }}>
      <h3>Second-Order Thinking</h3>
      <p style={{color:"#aaa"}}>
        Do not stop at the first consequence. Trace the chain.
      </p>
    </div>

  </div>

  {/* CTA */}
  <div style={{
    background:"#111",
    padding:"40px",
    borderRadius:"22px",
    textAlign:"center"
  }}>
    <h2 style={{fontSize:"36px"}}>Think Like a Builder</h2>
    <p style={{color:"#aaa", marginBottom:"25px"}}>
      Access the full system of mental models and decision tools.
    </p>

    <button style={{
      background:"#fff",
      color:"#000",
      padding:"14px 28px",
      borderRadius:"14px",
      border:"none",
      fontWeight:"bold",
      cursor:"pointer"
    }}>
      Get Lifetime Access
    </button>
  </div>

</main>

);
}