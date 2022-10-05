const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem",
        alignItems:'center',
        borderRadius:'0.4rem',
        backgroundColor:'rgba(249, 106, 144,0.8)'
      }}
    >
      <img
        src="src\assets\Leviteting.png"
        alt="logo"
        style={{ width: "50px", height: "50px",borderRadius:'0.3rem',
        margin:'1rem'
     }}
      />
      <div style={{display:"flex",
      margin:"0.5rem",
      gap:"1rem",
      padding:'1rem',
      borderRadius:'0.3rem'
    }}>
        <a href="App.jsx" style={{
          display:'flex',  
          color:'whitesmoke',
          textDecoration:"none",
          fontSize:'1.5rem',
          backgroundColor:"rgb(24, 23, 23)",
          padding:'0.5rem',
          borderRadius:'0.3rem'
    }}>Home</a>
        <a href="App.jsx" style={{
            display:'flex',
          color:'whitesmoke',
          fontSize:'1.5rem',
          textDecoration:"none",
          backgroundColor:' rgb(24, 23, 23)',
          padding:'0.5rem',
          borderRadius:'0.3rem'
    }}>About</a>
      </div>
    </div>
  );
};

export default Nav;
