class page {
  constructor(jsonObj) {
    document.body.style.margin = "0px";
    document.body.style.padding = "0px";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.style.fontFamily = "Poppins";
    document.body.style.overflow = "hidden";
    
    document.body.style.backgroundColor = "#f2efea";
    
    let bg = document.createElement("div");
    bg.style.width = "60rem";
    bg.style.height = "80rem";
    bg.style.position = "absolute";
    bg.style.zIndex = "-1";
    bg.style.backgroundColor = "#66d7d1";
    bg.style.top = "0px";
    document.body.append(bg);

    this.Sign_Up(jsonObj);
  }

  Sign_Up = function (json_obj) {
    
    let span = document.createElement("span");
    span.innerHTML = json_obj.cont7;
    span.style.position = "absolute";
    span.style.top = "8rem";
    span.style.left = "5rem";
    span.style.fontSize = "1.5rem";
    document.body.appendChild(span);
  
    let span1 = document.createElement("span");
    span1.append(json_obj.cont8);
    span1.style.position = "absolute";
    span1.style.top = "13rem";
    span1.style.left = "5rem";
    span1.style.fontSize = "1.2rem";
    span1.style.textAlign = "center";
    document.body.appendChild(span1);
  
    let img1 = document.createElement("img");
    img1.src = json_obj.img11;
    img1.style.height = "38rem";
    img1.style.width = "38rem"
    img1.style.position = "absolute";
    img1.style.top = "9rem";
    img1.style.left = "7rem";
  
    document.body.appendChild(img1);
  
    let span2 = document.createElement("span");
    span2.append(json_obj.cont12);
    span2.style.position = "absolute";
    span2.style.top = "5rem";
    span2.style.right = "24.5rem";
    span2.style.fontSize = "3rem";
    document.body.appendChild(span2);
  
    let input1 = document.createElement("input");
    input1.type = "text";
    input1.required = "true";
    input1.style.position = "absolute";
    input1.style.top = "10.5rem";
    input1.style.right = "18rem";
    input1.style.width = "20rem";
    input1.style.height = "3rem";
    input1.style.borderRadius = "2rem";
    input1.style.backgroundColor = "white";
    input1.style.textIndent = "52px";
    input1.style.fontSize = "1.3rem";
    input1.style.textAlign = "left";
    input1.style.padding = "0 0.4rem";
    input1.placeholder = "Username";
    document.body.appendChild(input1);
  
    let input2 = document.createElement("input");
    input2.type = "email";
    input2.required = "true";
    input2.style.position = "absolute";
    input2.style.top = "16rem";
    input2.style.right = "18rem";
    input2.style.width = "20rem";
    input2.style.height = "3rem";
    input2.style.borderRadius = "2rem";
    input2.style.backgroundColor = "white";
    input2.style.textIndent = "54px";
    input2.style.fontSize = "1.3rem";
    input2.style.textAlign = "left";
    input2.placeholder = "Email";
    input2.style.padding = "0 0.4rem";
    document.body.appendChild(input2);
  
    let input3 = document.createElement("input");
    input3.type = "tel";
    input3.required = "true";
    input3.style.position = "absolute";
    input3.style.top = "21.5rem";
    input3.style.right = "18rem";
    input3.style.width = "20rem";
    input3.style.height = "3rem";
    input3.style.borderRadius = "2rem";
    input3.style.backgroundColor = "white";
    input3.style.textIndent = "54px";
    input3.style.fontSize = "1.3rem";
    input3.style.textAlign = "left";
    input3.placeholder = "Contact";
    input3.style.padding = "0 0.4rem";
    document.body.appendChild(input3);
  
    let input4 = document.createElement("input");
    input4.type = "password";
    input4.required = "true";
    input4.style.position = "absolute";
    input4.style.top = "27rem";
    input4.style.right = "18rem";
    input4.style.width = "20rem";
    input4.style.height = "3rem";
    input4.style.borderRadius = "2rem";
    input4.style.backgroundColor = "white";
    input4.style.padding = "0 0.4rem";
    input4.style.textIndent = "52px";
    input4.style.fontSize = "1.3rem";
    input4.style.textAlign = "left";
    input4.placeholder = "Password";
    document.body.appendChild(input4);
  
    let img2 = document.createElement("img");
    img2.src = json_obj.img12;
    img2.style.height = "2rem";
    img2.style.position = "absolute";
    img2.style.top = "27.5rem";
    img2.style.right = "36rem";
    img2.style.cursor = "pointer";
    img2.addEventListener("click", toggle);
    document.body.appendChild(img2);
  
    let img3 = document.createElement("img");
    img3.src = json_obj.img14;
    img3.style.height = "2rem";
    img3.style.position = "absolute";
    img3.style.top = "11.2rem";
    img3.style.right = "36rem";
    img3.style.cursor = "pointer";
    document.body.appendChild(img3);
  
    let img4 = document.createElement("img");
    img4.src = json_obj.img15;
    img4.style.height = "2rem";
    img4.style.position = "absolute";
    img4.style.top = "16.6rem";
    img4.style.right = "36rem";
    img4.style.cursor = "pointer";
    document.body.appendChild(img4);
  
    let img5 = document.createElement("img");
    img5.src = json_obj.img16;
    img5.style.height = "2rem";
    img5.style.position = "absolute";
    img5.style.top = "22.2rem";
    img5.style.right = "36rem";
    img5.style.cursor = "pointer";
    document.body.appendChild(img5);
  
    function toggle() {
      input4.type = input4.type == "password" ? "text" : "password";
      img2.src =
        img2.getAttribute("src") == json_obj.img12
          ? json_obj.img13
          : json_obj.img12;
    }
  
    let button = document.createElement("button");
    button.innerHTML = json_obj.cont13;
    button.style.padding = "1.2rem 4rem";
    button.style.borderRadius = "2rem";
    button.style.outline = "none";
    button.style.fontWeight = "600";
    button.style.textTransform = "uppercase";
    button.style.backgroundColor = "rgb(47, 72, 88)";
    button.style.color = "white";
    button.style.position = "absolute";
    button.style.bottom = "8.5rem";
    button.style.right = "24rem";
    button.style.borderStyle = "none";
    button.style.cursor = "pointer";
    document.body.appendChild(button);
  

  
    
  
    let fb = document.createElement("img");
    fb.src = json_obj.img17;
    fb.style.width = "3rem";
    fb.style.height = "3rem";
    fb.style.position = "absolute";
    fb.style.bottom = "2rem";
    fb.style.right = "38rem";
    fb.style.outline = "1px solid black";
    fb.style.padding = "1rem";
    fb.style.borderRadius = "50%";
    fb.style.backgroundColor = "#3b5998";
    fb.style.cursor = "pointer";
    document.body.appendChild(fb);
  
    let goog = document.createElement("img");
    goog.src = json_obj.img18;
    goog.style.width = "2.6rem";
    goog.style.height = "2.8rem";
    goog.style.position = "absolute";
    goog.style.bottom = "2rem";
    goog.style.right = "31.5rem";
    goog.style.outline = "1px solid black";
    goog.style.padding = "1rem";
    goog.style.borderRadius = "50%";
    goog.style.backgroundColor = "whitesmoke";
    goog.style.cursor = "pointer";
    document.body.appendChild(goog);
  
    let link = document.createElement("img");
    link.src = json_obj.img19;
    link.style.width = "2.6rem";
    link.style.height = "2.6rem";
    link.style.position = "absolute";
    link.style.bottom = "2rem";
    link.style.right = "25rem";
    link.style.outline = "1px solid black";
    link.style.padding = "1rem";
    link.style.borderRadius = "50%";
    link.style.cursor = "pointer";
    link.style.backgroundColor = "#0077b7";
    document.body.appendChild(link);
  
    let insta = document.createElement("img");
    insta.src = json_obj.img20;
    insta.style.width = "2.6rem";
    insta.style.height = "2.6rem";
    insta.style.position = "absolute";
    insta.style.bottom = "2rem";
    insta.style.right = "18.5rem";
    insta.style.outline = "1px solid black";
    insta.style.padding = "1rem";
    insta.style.borderRadius = "50%";
    insta.style.cursor = "pointer";
    insta.style.backgroundColor = "whitesmoke"
    document.body.appendChild(insta);  
  }
}

async function load() {
  let request = new Request("json/bmu.json");
  let response = await fetch(request);

  let json_obj = await response.json();
  let su = new page(json_obj);
}


load();
