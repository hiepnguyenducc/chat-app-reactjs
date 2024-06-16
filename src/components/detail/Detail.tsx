import './Detail.css'
function Detail(){
  return(
  <div className="detail">
   <div className="user">
  <img src="./avatar.png" alt=""/>
     <h2>HIEP</h2>
     <p>fdsahfkjahsfsakjfhasdkfjh asdfashfaskfjh safadsfa</p>
   </div>
    <div className="info">
      <div className="option">
        <div className="title">
          <span>Chat Setting</span>
          <img src="./arrowUp.png" alt=""/>
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Privacy & Help</span>
          <img src="./arrowUp.png" alt=""/>
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared photos</span>
          <img src="./arrowUp.png" alt=""/>
        </div>
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/448327812_481304914458948_5056782705522506213_n.jpg?stp=cp6_dst-jpg_s600x600&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGpy2r8mY0gZoGlakjGkvLL1q1gnfnC5P_WrWCd-cLk_2VxuVAgHJXseVDspchK5TtA0XZtOnhvYBrSv-Xw32A7&_nc_ohc=ttYcUoAn1DAQ7kNvgE7Dc0z&_nc_ht=scontent.fsgn4-1.fna&oh=00_AYCv57yilHQNXBAg1_hfhvdrcAddmc93AUdpSIgKrxs5ow&oe=6670EA10"
                alt=""/>
              <span>photo_20024_2.png</span>
            </div>
          <img src="./download.png" className="icon" alt=""/>

          </div>
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Files</span>
          <img src="./arrowUp.png" alt=""/>
        </div>
      </div>
      <button>Block User</button>
      <button className="logout">Logout</button>
    </div>
  </div>


  )
}

export default Detail
