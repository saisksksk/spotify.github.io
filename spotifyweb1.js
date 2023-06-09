/*sections  */
let fullsection =document.getElementById("fullbackg");
let section_1 =document.getElementById("section1");
let section_2 =document.getElementById("section2");
let section_3 =document.getElementById("section3");

/*sections  */

/*carts */
let L_card1 =document.getElementById("L_card1")
let L_card2 =document.getElementById("L_card2")
               /*righr */
let R_card1 =document.getElementById("R_card1")
let R_card2 =document.getElementById("R_card2")
let R_card3 =document.getElementById("R_card3")

/*carts */

/*cart1 */


let home =document.getElementById("home")
let home_p =document.getElementById("home_p")

let search =document.getElementById("search")
let search_p =document.getElementById("search_p")

/*cart1 */
/*cart2 */
/*need change numbers of let to id */

let libraryicon =document.getElementById("libraryicon")
let library_p =document.getElementById("library_p")

let library_h1 =document.getElementById("library_h1")
let  Library_list =document.getElementById("search_p")

let  leftcart2albumcart =document.getElementById("search_p")

let  Library_serch =document.getElementById("options")
let  options =document.getElementById("search_p")
let  playlistcart =document.getElementById("playlistcart")
let  playlist_img =document.getElementById("options")
let  playlist_text =document.getElementById("search_p")

let  playlistcart2 =document.getElementById("playlistcart")
let  playlist_img2 =document.getElementById("options")
let  playlist_text2 =document.getElementById("search_p")

let  playlistcart3 =document.getElementById("playlistcart")
let  playlist_img3 =document.getElementById("options")
let  playlist_text3 =document.getElementById("search_p")

let  playlistcart4 =document.getElementById("playlistcart")
let  playlist_img4 =document.getElementById("options")
let  playlist_text4 =document.getElementById("search_p")

let  playlistcart5 =document.getElementById("playlistcart")
let  playlist_img5 =document.getElementById("options")
let  playlist_text5 =document.getElementById("search_p")

let  playlistcart6 =document.getElementById("playlistcart")
let  playlist_img6 =document.getElementById("options")
let  playlist_text6 =document.getElementById("search_p")

let  playlistcart7 =document.getElementById("playlistcart")
let  playlist_img7 =document.getElementById("options")
let  playlist_text7 =document.getElementById("search_p")

let  playlistcart8 =document.getElementById("playlistcart")
let  playlist_img8 =document.getElementById("options")
let  playlist_text8 =document.getElementById("search_p")

let  playlistcart9 =document.getElementById("playlistcart")
let  playlist_img9 =document.getElementById("options")
let  playlist_text9 =document.getElementById("search_p")

let  playlistcart10 =document.getElementById("playlistcart")
let  playlist_img10 =document.getElementById("options")
let  playlist_text10 =document.getElementById("search_p")

let  playlistcart11 =document.getElementById("playlistcart")
let  playlist_img11 =document.getElementById("options")
let  playlist_text11 =document.getElementById("search_p")

let  playlistcart12 =document.getElementById("playlistcart12")
let  playlist_img12 =document.getElementById("playlist_img12")
let  playlist_text12 =document.getElementById("playlist_text12")

let  playlistcart13 =document.getElementById("playlistcart13")
let  playlist_img13 =document.getElementById("playlist_img13")
let  playlist_text13 =document.getElementById("playlist_text13")

let  navibar =document.getElementById("navibar")
let   =document.getElementById("navibar")
/*cart2 */




/*left_cart2_albumcart creating  */
let l_c2_acart =document.getElementById("leftcart2albumcart");
let addbtn=document.getElementById("library_h1");


let listtodo =[ {pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8vl-PcTa5Euv40E7cHNeNfc8XYTJ7lDA5KLB7NCJ1w-QIyS0Jx7Fb7l0qDcd1R2wx2I&usqp=CAU",texth1:"New Folder",textp:"0 Playlist"}

]

let listcount=listtodo.length



function create_l_c2_album(todo) {
    

   let new_l_album =document.createElement("div");
   new_l_album.classList.add("leftalbumcart","d-flex","flex-row","backgdesgintg");
   l_c2_acart.appendChild(new_l_album);

   let l_album_pic =document.createElement("img");
   l_album_pic.src=todo.pic;
   l_album_pic.classList.add("leftalbumpic");
   new_l_album.appendChild(l_album_pic);

   let l_albumunder_div =document.createElement("div");
   l_albumunder_div.classList.add("d-flex","flex-column")
   new_l_album.appendChild(l_albumunder_div);

   let l_album_h1 =document.createElement("h1");
   l_album_h1.classList.add("leftalbumh1");
   l_album_h1.textContent=todo.texth1;
   l_albumunder_div.appendChild(l_album_h1);

   let l_album_p =document.createElement("p");
   l_album_p.classList.add("leftalbum_p");
   l_album_p.textContent=todo.textp;
   l_albumunder_div.appendChild(l_album_p);

}

addbtn.onclick =function() {

   for(let todo of listtodo ) {
      create_l_c2_album(todo);
   }
}




/*left_cart2_albumcart creating  end*/

/*right album carts creating */

let albumcartbackg =document.getElementById("R_card2");
let albumcartid =document.getElementById("Albumscontanerid")

let album1todo =[ {pic:"https://1601606126.rsc.cdn77.org/raagaimg/r_img/catalog/s/%7B38dad986-316a-4a1c-a9d8-096fd3991bca%7D.jpg",texth1:"bala Subramaniam",textp:"0 Playlist"},
                  {pic:"https://cdnb.artstation.com/p/assets/images/images/027/700/463/large/loganathan-natarajan-ill-1.jpg?1592304078",texth1:"Ilaiyaraaja",textp:"0 Playlist"},
                  {pic:"https://i.scdn.co/image/ab6761610000e5ebfc6d194a99154edc35330020",texth1:"M. M. Keeravani",textp:"0 Playlist"}

]

   let album1count=album1todo.length

   let albumcontainer =document.createElement("div");
   albumcontainer.classList.add("text-white","d-flex","flex-row","justify-content-between","mt-4");
   albumcartbackg.appendChild(albumcontainer);

   let album1_heading =document.createElement("h1");
   album1_heading.textContent="Your Top mix";
   album1_heading.classList.add("heading")
   albumcontainer.appendChild(album1_heading);

   let album1_seeall =document.createElement("p");
   album1_seeall.textContent="See all ";
   albumcontainer.appendChild(album1_seeall);

   let albumconrow2 =document.createElement("div");
   albumconrow2.classList.add("d-flex","flex-row","justify-content-between");
   albumcartbackg.appendChild(albumconrow2);

function create_r_c1_album(todo2) {
    
   
   
   let albumcon2 =document.createElement("div");
   albumcon2.classList.add("rightalbumcartsize","d-flex","flex-column","justify-content-");
   albumconrow2.appendChild(albumcon2);

   let l_album_pic =document.createElement("img");
   l_album_pic.src=todo2.pic;
   l_album_pic.classList.add("rightalbumpic");
   albumcon2.appendChild(l_album_pic);

   /* let l_albumunder_div =document.createElement("div");
   l_albumunder_div.classList.add("d-flex","flex-column")
   albumcon2.appendChild(l_albumunder_div); */

   let rightalbumtextsize =document.createElement("h1");
   rightalbumtextsize.classList.add("rightalbumtextsize","text-white","mt-1","break-word");
   let len =todo2.texth1;
   let lenlen =len.length;
   let slicelen =len.slice(0,13);
   if (lenlen > 12) {
      rightalbumtextsize.textContent=slicelen+"...";
   } else {
   rightalbumtextsize.textContent=todo2.texth1;
   }
   albumcon2.appendChild(rightalbumtextsize);

   let l_album_p =document.createElement("p");
   l_album_p.classList.add("heading2","text-white");
   l_album_p.textContent=todo2.textp;
   albumcon2.appendChild(l_album_p);



   

}

for(let todo2 of album1todo ) {
   create_r_c1_album(todo2);
}


/* second album3 */

let albumcontainer2 =document.createElement("div");
albumcontainer2.classList.add("text-white","d-flex","flex-row","justify-content-between","mt-4");
albumcartbackg.appendChild(albumcontainer2);

let album1_heading2 =document.createElement("h1");
album1_heading2.textContent="Recently Played";
album1_heading2.classList.add("heading")
albumcontainer2.appendChild(album1_heading2);

let album1_seeall2 =document.createElement("p");
album1_seeall2.textContent="See all ";
albumcontainer2.appendChild(album1_seeall2);

let albumconrow3 =document.createElement("div");
albumconrow3.classList.add("d-flex","flex-row","justify-content-between");
   albumcartbackg.appendChild(albumconrow3);



let album1todo3 =[ {pic:"https://c.saavncdn.com/735/Naa-Madhi-From-Thiru-Telugu-2022-20220819131251-500x500.jpg",texth1:"Thiru (Telugu songs)",textp:"Naa Madhi"},
                  {pic:"https://i.pinimg.com/originals/48/ef/5e/48ef5e641deadffae9e55d88e4296cdd.jpg",texth1:"PawanKalyan Vinatge",textp:"Ye Mera Jaha"},
                  {pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2ZMpHOBMbxIbuQ7EIQ2dCmHebYIlv1jZSU9i07UNWKSgBflUnaerfP22iyXCu9lhqE4&usqp=CAU",texth1:"raghuvaran btech ",textp:"luck anna maate"}

]

function create_r_c3_album(todo3) {
    
   
   
   let albumcon2 =document.createElement("div");
   albumcon2.classList.add("rightalbumcartsize","d-flex","flex-column","justify-content-");
   albumconrow3.appendChild(albumcon2);

   let l_album_pic =document.createElement("img");
   l_album_pic.src=todo3.pic;
   l_album_pic.classList.add("rightalbumpic");
   albumcon2.appendChild(l_album_pic);

   /* let l_albumunder_div =document.createElement("div");
   l_albumunder_div.classList.add("d-flex","flex-column")
   albumcon2.appendChild(l_albumunder_div); */

   let rightalbumtextsize =document.createElement("h1");
   rightalbumtextsize.classList.add("rightalbumtextsize","text-white","mt-1","break-word");
   let len =todo3.texth1;
   let lenlen =len.length;
   let slicelen =len.slice(0,13);
   if (lenlen > 12) {
      rightalbumtextsize.textContent=slicelen+"...";
   } else {
   rightalbumtextsize.textContent=todo3.texth1;
   }
   albumcon2.appendChild(rightalbumtextsize);

   let l_album_p =document.createElement("p");
   l_album_p.classList.add("heading2","text-white");
   l_album_p.textContent=todo3.textp;
   albumcon2.appendChild(l_album_p);



   

}

for(let todo3 of album1todo3 ) {
   create_r_c3_album(todo3);
}



/* second album4 */

let albumcontainer4 =document.createElement("div");
albumcontainer4.classList.add("text-white","d-flex","flex-row","justify-content-between","mt-4");
albumcartbackg.appendChild(albumcontainer4);

let album1_heading4 =document.createElement("h1");
album1_heading4.textContent="More Like Thiru (Telugu songs) ";
album1_heading4.classList.add("heading")
albumcontainer4.appendChild(album1_heading4);

let album1_seeall4 =document.createElement("p");
album1_seeall4.textContent="See all ";
albumcontainer4.appendChild(album1_seeall4);

let albumconrow4 =document.createElement("div");
albumconrow4.classList.add("d-flex","flex-row","justify-content-between");
   albumcartbackg.appendChild(albumconrow4);



let album1todo4 =[ {pic:"https://mosaic.scdn.co/640/ab67616d00001e0260f9253344760fcbdae270a5ab67616d00001e0272b98498edea07c167d9d061ab67616d00001e02b2fb894f1c5915164c4c63c3ab67616d00001e02f8339590174bd2b8c14cd00d",texth1:"hot hits telugu",textp:"Tune in to the Hottest Tracks of Tollywood! Cover : Dasara"},
                  {pic:"https://mosaic.scdn.co/300/ab67616d00001e022976d2dee7ce4d1ac0e45b97ab67616d00001e0254f142b48177e144dc6d525aab67616d00001e0285efa87a5eafe030b2495b7eab67616d00001e02bc409fbda2078c71afb5b474",texth1:"latest Romance telugu",textp:"New Music from Tollywood! "},
                  {pic:"https://image-resizer-cloud-api.akamaized.net/image/16B1DA50-502C-4A39-96ED-F051261B548B/0-16x9.jpg?width=1920",texth1:"Kushi",textp:"Bringing out the best of latest love tracks Cover : Kushi"}

]

function create_r_c4_album(todo4) {
    
   
   
   let albumcon2 =document.createElement("div");
   albumcon2.classList.add("rightalbumcartsize","d-flex","flex-column","justify-content-");
   albumconrow4.appendChild(albumcon2);

   let l_album_pic =document.createElement("img");
   l_album_pic.src=todo4.pic;
   l_album_pic.classList.add("rightalbumpic");
   albumcon2.appendChild(l_album_pic);

   /* let l_albumunder_div =document.createElement("div");
   l_albumunder_div.classList.add("d-flex","flex-column")
   albumcon2.appendChild(l_albumunder_div); */

   let rightalbumtextsize =document.createElement("h1");
   rightalbumtextsize.classList.add("rightalbumtextsize","text-white","mt-1","break-word");
   let len =todo4.texth1;
   let lenlen =len.length;
   let slicelen =len.slice(0,13);
   if (lenlen > 12) {
      rightalbumtextsize.textContent=slicelen+"...";
   } else {
   rightalbumtextsize.textContent=todo4.texth1;
   }
   albumcon2.appendChild(rightalbumtextsize);

   let l_album_p =document.createElement("p");
   l_album_p.classList.add("heading2","text-white");
   l_album_p.textContent=todo4.textp;
   albumcon2.appendChild(l_album_p);



   

}

for(let todo4 of album1todo4 ) {
   create_r_c4_album(todo4);
}



let para =document.createElement("h1");
para.textContent=section_1.offsetWidth;
section_2.appendChild(para);

/* width functions */
let zoomout =document.getElementById("zoomout")
zoomout.onclick=function() {
   let sec1_width = section_1.offsetWidth;
   let sec2_width = section_1.style.width="20vw"
   if (sec1_width > sec2_width ) {
      return 
     function section1_widthchanges_1() {
      section_2.style.width="70vw";
      section_2.style.backgroundColor="white";    
      section_1.style.width="26vw";
        
      }

     

   }
   section1_widthchanges_1();

}