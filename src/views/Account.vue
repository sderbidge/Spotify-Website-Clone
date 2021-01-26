<template>
  <div class="account">
    <div class="header">
      <div class="header-inside">
        <div class="logo-container">
          <span class="logo">
            <svg
              viewBox="0 0 63 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMin meet"
            >
              <g fill-rule="evenodd" class="svelte-1gcdbl9">
                <path
                  d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"
                />
              </g>
            </svg>
          </span>
        </div>
        <nav class="navbar">
          <ul class="nav-list">
            <li>
              <router-link class="menu-link" to="/account">Premium</router-link>
            </li>
            <li>
              <router-link class="menu-link" to="/account">Support</router-link>
            </li>
            <li>
              <router-link class="menu-link" to="/account"
                >Download</router-link
              >
            </li>
            <li class="seperator"></li>
            <li>
              <router-link class="menu-link" to="/">Sign Out</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="middle-section">
      <div class="content-container">
        <div class="without-limits-container">
          <div class="without-limits-sub-container">
            <h2 class="">Music without limits</h2>
            <p class="">
              Premium lets you play any song, anytime. You can even listen when
              you’re offline. No restrictions. No ads.
            </p>
            <div class="green-btn">Get Premium</div>
          </div>
          <div class="iphone-container">
            <img src="../../images/iphone.png" />
          </div>
        </div>
        <div class="account-info">
          <div class="sidebar">
            <img id="user" src="../../images/user.png" />
            <div class="sidebar-nav">
              <div class="sidebar-nav-item active">
                <div></div>
                <p>Account overview</p>
              </div>
              <div class="sidebar-nav-item"><p>Edit profile</p></div>
              <div class="sidebar-nav-item"><p>Set device password</p></div>
              <div class="sidebar-nav-item"><p>Notification settings</p></div>
              <div class="sidebar-nav-item"><p>Privacy settings</p></div>
              <div class="sidebar-nav-item"><p>Recover playlists</p></div>
              <div class="sidebar-nav-item"><p>Receipts</p></div>
              <div class="sidebar-nav-item"><p>Apps</p></div>
              <div class="sidebar-nav-item">
                <p>Redeem</p>
                <p></p>
              </div>
            </div>
          </div>
          <div class="account-overview">
            <h1>Account overview</h1>
            <h3>Profile</h3>
            <div class="info-cell">
              <div class="info-cell-title">Username</div>
              <div class="cell-info">13905827538</div>
            </div>
            <div class="info-cell">
              <div class="info-cell-title">Email</div>
              <div class="cell-info">your.name@email.com</div>
            </div>
            <div class="info-cell">
              <div class="info-cell-title">Date of birth</div>
              <div class="cell-info">January 1, 1900</div>
            </div>
            <div class="info-cell">
              <div class="info-cell-title">Country of region</div>
              <div class="cell-info">USA</div>
            </div>
            <div class="gray-btn">Edit Profile</div>
            <h3 class="plan">Your plan</h3>
            <div class="purple-container">
              <span>Spotify Free</span>
            </div>
            <div class="outline-box">
              <div class="outline-box-text1">
                <p>Play music in shuffle mode only, with ads.</p>
              </div>
              <div class="outline-box-text2">Free</div>
            </div>
            <div class="gray-btn">Join Premium</div>
            <h3 class="signout-h3">Signout everywhere</h3>
            <p>
              Sign out wherever you have Spotify open, including the web,
              mobile, desktop or any other devices.
            </p>
            <div class="note-card">
              <span
                >Note: This doesn’t include partner devices, such as Sonos and
                PlayStation. For more information about logging out (or
                unlinking) Spotify from a partner device, check the device’s
                manufacturer guide.
              </span>
            </div>
            <div class="gray-btn sign-out">Sign Out Everywhere</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <nav class="footer-nav">
        <div class="logo-footer-container">
          <div class="logo-container-2">
            <span class="logo">
              <svg
                viewBox="0 0 63 20"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMin meet"
              >
                <g fill-rule="evenodd" class="svelte-1gcdbl9">
                  <path
                    d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
        <div class="footer-section">
          <span class="footer-header">Company</span>
          <span class="footer-nav-span">About</span>
          <span class="footer-nav-span">Jobs</span>
          <span class="footer-nav-span">For the Record</span>
        </div>
        <div class="footer-section">
          <span class="footer-header">Communities</span>
          <span class="footer-nav-span">For Artists</span>
          <span class="footer-nav-span">Developers</span>
          <span class="footer-nav-span">Advertising</span>
          <span class="footer-nav-span">Investors</span>
          <span class="footer-nav-span">Vendors</span>
        </div>
        <div class="footer-section">
          <span class="footer-header">Useful Links</span>
          <span class="footer-nav-span">Support</span>
          <span class="footer-nav-span">Web Player</span>
          <span class="footer-nav-span">Free Mobile App</span>
          <span class="footer-nav-span">2020 Wrapped</span>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.account {
  font-family: Circular, Helvetica, Arial, sans-serif, IosFix;
}

.header {
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0);
  z-index: 1020;
  right: 0;
  left: 0;
  top: 0;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  min-height: 54px;
  display: flex;
  justify-content: center;
}

.header-inside {
  width: 1150px;
  height: 80px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
}

.logo-container {
  width: 132px;
  height: 60px;
  margin-top: 20px;
}

.logo-container-2 {
  width: 132px;
  height: 60px;
}

.logo {
  width: 100%;
  height: 100%;
  fill: #fff;
}

.navbar {
  width: auto;
  height: 80px;
  display: flex;
  justify-content: flex-start;
}

.nav-list {
  list-style: none;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
}

.menu-link {
  padding: 28px 17px;
  width: auto;
  height: 24px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.menu-link:hover {
  color: #1ed760;
}

.seperator {
  width: 2px;
  height: 16px;
  margin: 32px 17px;
  background-color: #fff;
}

.middle-section {
  background-color: #1f2a39;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

.content-container {
  width: 1170px;
  height: auto;
}

.without-limits-container {
  height: 480px;
  width: 1140px;
  padding-top: 44px;
  padding-left: 15px;
  padding-right: 15px;
  background-image: linear-gradient(to bottom, #121e3d 0%, #000 100%);
  background-repeat: repeat-x;
  display: flex;
}

.without-limits-sub-container {
  width: 500px;
  height: 300px;
  padding: 0 15px;
  margin-top: 140px;
  margin-right: 45px;
  margin-left: 70px;
}

.without-limits-sub-container h2 {
  color: #fff;
  font-size: 65px;
}

.without-limits-sub-container p {
  color: #fff;
  font-size: 15px;
  margin-top: 15px;
}

.green-btn {
  width: 113px;
  height: 20px;
  border-radius: 30px;
  background-color: #1db954;
  padding: 14px 42px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 16px;
  cursor: pointer;
}

.green-btn:hover {
  width: 120px;
  font-size: 14.5px;
  margin-left: -4px;
  background-color: #19da5c;
}

.iphone-container img {
  width: 307px;
  height: 350px;
  margin-top: 130px;
  margin-left: 15px;
}

.account-info {
  width: 100%;
  height: 1562px;
  display: flex;
  justify-content: flex-start;
}

.sidebar {
  width: 292px;
  height: 100%;
  background-color: #1b1b1b;
}

.sidebar-nav {
  height: 504px;
  width: 100%;
  margin-top: 20px;
}

.sidebar-nav-item {
  height: 54px;
  width: 100%;
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.005);
  border-top: 1px solid rgba(0, 0, 0, 0.025);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(255, 255, 255, 0.05);
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.sidebar-nav-item p {
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #919496;
  margin-left: 80px;
  cursor: pointer;
}

.active div {
  background-color: #1db954;
  height: 100%;
  width: 5px;
  margin-right: -5px;
}

.active p {
  color: #fff;
}

#user {
  width: 80px;
  height: 80px;
  margin-left: 100px;
  margin-top: 30px;
}

.account-overview {
  width: 781px;
  padding: 48px;
  background-color: #fff;
}

.account-overview h1 {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: block;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 42px;
  font-weight: 900;
  letter-spacing: -1px;
  line-height: 40px;
  padding-bottom: 40px;
}

.account-overview h3 {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: block;
  padding: 0px 0px 1em;
  font-size: 20px;
  font-weight: 900;
  line-height: 28px;
  letter-spacing: -0.25px;
  padding-bottom: 40px;
}

.info-cell {
  width: 100%;
  height: 55px;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  justify-content: flex-start;
}

.info-cell-title {
  width: 50%;
  height: 24px;
  padding: 15px 15px 15px 0px;
  color: #9e9e9e;
}

.cell-info {
  width: 50%;
  width: 50%;
  height: 24px;
  padding: 15px 15px 15px 0px;
  font-weight: 600;
  color: #222326;
}

.gray-btn {
  width: 113px;
  height: 20px;
  border-radius: 30px;
  border: 2px solid #757575;
  padding: 14px 42px;
  color: #757575;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 16px;
  cursor: pointer;
}

.gray-btn:hover {
  width: 120px;
  height: 22px;
  border: 2px solid #181818;
  color: #181818;
  font-size: 14.8px;
  margin-left: -4px;
}

.sign-out {
  width: 180px;
  height: 20px;
  border-radius: 30px;
  border: 2px solid #757575;
  padding: 14px 42px;
  color: #757575;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 16px;
  cursor: pointer;
}

.sign-out:hover {
  width: 185px;
  height: 22px;
  border: 2px solid #181818;
  color: #181818;
  font-size: 14.8px;
  margin-left: -1px;
}

.plan {
  margin-top: 70px;
}

.purple-container {
  width: 779px;
  height: 230px;
  background: linear-gradient(
    -180deg,
    rgb(182, 43, 190) 0%,
    rgb(150, 34, 185) 100%
  );
  display: flex;
  align-items: center;
  border-radius: 4px 4px 0px 0px;
  border: 1px solid #d9dadc;
}

.purple-container span {
  padding: 24px;
  font-size: 40px;
  font-weight: 900;
  color: #fff;
}

.outline-box {
  padding: 24px;
  border-radius: 4px;
  border: 1px solid #d9dadc;
  width: 732px;
  height: 130px;
}

.outline-box-text1 {
  width: 100%;
  height: 40px;
  padding-bottom: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid #d9dadc;
}

.outline-box-text2 {
  font-weight: 900;
  font-size: 24px;
}

.signout-h3 {
  margin-top: 72px;
}

.note-card {
  background: var(--gray-95);
  border: 1px solid #d9dadc;
  border-radius: 4px;
  padding: 16px;
  margin-top: 15px;
  line-height: 1.5;
  color: #222326;
  background-color: #f8f8f8;
}

.footer {
  background-color: black;
  width: 100%;
  height: 407px;
  padding-top: 80px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
}

.logo-footer-container {
  height: 100%;
  width: 165px;
  padding: 0px 15px;
}

.footer-nav {
  width: 77%;
  height: 407px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.footer-section {
  height: 100%;
  width: 165px;
  padding: 0px 15px;
}

.footer-header {
  color: #919496;
  font-size: 12px;
  font-weight: 900;
  line-height: 1.4;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: inline-block;
  margin: 20px 0;
}

.footer-nav-span {
  height: 42px;
  font-size: 16px;
  font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: #ffffff;
  display: block;
  cursor: pointer;
}

.footer-nav-span:hover {
  color: #1ed760;
}
</style>