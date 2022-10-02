import Head from "next/head";
import AuthContent from "../components/AuthContent";
import { useRef, useEffect } from "react";

export default function Home({ props: { dt } }) {
  var cslider = useRef(null);

  useEffect(() => {
    if (cslider.current) {
      new Splide(".carousel-multiple", {
        perPage: 1,
        rewind: true,
        type: "loop",
        gap: 16,
        padding: 16,
        arrows: false,
        pagination: false,
        breakpoints: {
          768: {
            perPage: 2,
          },
          991: {
            perPage: 3,
          },
        },
      }).mount();
    }
  }, [cslider]);

  return (
    <AuthContent>
      <Head>
        <title>LoyalMV</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </Head>

      <div className="appHeader bg-primary text-light">
        <div className="left">
          <a
            href="#"
            className="headerButton"
            data-bs-toggle="modal"
            data-bs-target="#sidebarPanel"
          >
            <ion-icon name="menu-outline" />
          </a>
        </div>
        <div className="pageTitle">
          <img src="assets/img/logo.png" alt="logo" className="logo" />
        </div>
        <div className="right">
          <a href="app-notifications.html" className="headerButton">
            <ion-icon className="icon" name="notifications-outline" />
            <span className="badge badge-danger">4</span>
          </a>
          <a href="app-settings.html" className="headerButton">
            <img
              src="assets/img/sample/avatar/avatar1.jpg"
              alt="image"
              className="imaged w32"
            />
            <span className="badge badge-danger">6</span>
          </a>
        </div>
      </div>
      <div id="appCapsule">
        <div className="section wallet-card-section pt-1">
          <div className="wallet-card">
            <div className="balance">
              <div className="left">
                <span className="title">Member balance</span>
                <h1 className="total">Unlimited</h1>
                <span className="title">untill 31st December, 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="row mt-2">
            <div className="col-6">
              <div className="stat-box">
                <div className="title">Trasactions</div>
                <div className="value">12</div>
              </div>
            </div>
            <div className="col-6">
              <div className="stat-box">
                <div className="title">Savings</div>
                <div className="value text-success">$ 120.99</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section full mt-4 mb-3">
          <div className="section-heading padding">
            <h2 className="title">Shops</h2>
            <a href="/shops" className="link">
              View All
            </a>
          </div>

          <div className="carousel-multiple splide" ref={cslider}>
            <div className="splide__track">
              <ul className="splide__list">
                {/* {data.map((shop, i) => (
                  <li className="splide__slide" key={i}>
                    <a href="/shops/">
                      <div className="blog-card">
                        <img
                          src={shop.title.rendered}
                          alt={shop._embedded["wp:featuredmedia"][0].source_url}
                          className="imaged w-100"
                          style={{ objectFit: "cover", height: "174px" }}
                        />

                        <div className="text">
                          <h4 className="title" style={{ fontSize: "1.5em" }}>
                            {shop.title.rendered}
                            <span
                              style={{
                                float: "right",
                                fontSize: "0.9em",
                              }}
                            >
                              Percent%
                            </span>
                          </h4>
                        </div>
                      </div>
                    </a>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="appBottomMenu">
        <a href="/profile" className="item">
          <div className="col">
            <ion-icon name="person-outline" />
            <strong>Profile</strong>
          </div>
        </a>
        <a href="/shops" className="item">
          <div className="col">
            <ion-icon name="apps-outline" />
            <strong>Shops</strong>
          </div>
        </a>
        <a href="/" className="item active">
          <div className="col">
            <ion-icon name="home-outline" />
            <strong>Home</strong>
          </div>
        </a>
        <a href="/logout" className="item">
          <div className="col">
            <ion-icon name="log-out-outline" />
            <strong>Logout</strong>
          </div>
        </a>
        <a href="/profile/settings" className="item">
          <div className="col">
            <ion-icon name="settings-outline" />
            <strong>Settings</strong>
          </div>
        </a>
      </div>

      <div
        className="modal fade panelbox panelbox-left"
        id="sidebarPanel"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body p-0">
              <div className="profileBox pt-2 pb-2">
                <div className="image-wrapper">
                  <img
                    src="assets/img/sample/avatar/avatar1.jpg"
                    alt="image"
                    className="imaged  w36"
                  />
                </div>
                <div className="in">
                  <strong>User Name</strong>
                  <div className="text-muted">4029209</div>
                </div>
                <a
                  href="#"
                  className="btn btn-link btn-icon sidebar-close"
                  data-bs-dismiss="modal"
                >
                  <ion-icon name="close-outline" />
                </a>
              </div>
              {/* <div className="sidebar-balance">
                                    <div className="listview-title">Balance</div>
                                    <div className="in">
                                        <h1 className="amount">$ 2,562.50</h1>
                                    </div>
                                </div>
                                <div className="action-group">
                                    <a href="index.html" className="action-button">
                                        <div className="in">
                                            <div className="iconbox">
                                                <ion-icon name="add-outline"/>
                                            </div>
                                            Deposit
                                        </div>
                                    </a>
                                    <a href="index.html" className="action-button">
                                        <div className="in">
                                            <div className="iconbox">
                                                <ion-icon name="arrow-down-outline"/>
                                            </div>
                                            Withdraw
                                        </div>
                                    </a>
                                    <a href="index.html" className="action-button">
                                        <div className="in">
                                            <div className="iconbox">
                                                <ion-icon name="arrow-forward-outline"/>
                                            </div>
                                            Send
                                        </div>
                                    </a>
                                    <a href="app-cards.html" className="action-button">
                                        <div className="in">
                                            <div className="iconbox">
                                                <ion-icon name="card-outline"/>
                                            </div>
                                            My Cards
                                        </div>
                                    </a>
                                </div> */}
              <div className="listview-title mt-1">Menu</div>
              <ul className="listview flush transparent no-line image-listview">
                <li>
                  <a href="/" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="home-outline" />
                    </div>
                    <div className="in">Home</div>
                  </a>
                </li>
                <li>
                  <a href="/login" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="log-in-outline" />
                    </div>
                    <div className="in">Login</div>
                  </a>
                </li>
                <li>
                  <a href="/register" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="document-outline" />
                    </div>
                    <div className="in">Register</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal inset fade action-sheet android-add-to-home"
        id="android-add-to-home-screen"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Install to your phone</h5>
              <a href="#" className="close-button" data-bs-dismiss="modal">
                <ion-icon name="close" />
              </a>
            </div>
            <div className="modal-body">
              <div className="action-sheet-content text-center">
                <div className="mb-1">
                  <img
                    src="assets/img/icon/192x192.png"
                    alt="image"
                    className="imaged w64 mb-2"
                  />
                </div>
                <div>
                  Install
                  <strong>LoyalMV App to your phone,</strong>
                  on just a tap!
                </div>
                <div>
                  Tap
                  <ion-icon name="ellipsis-vertical" />
                  Install to your phone
                </div>
                <div className="mt-2">
                  <button
                    className="btn btn-primary btn-block"
                    data-bs-dismiss="modal"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthContent>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://visam.bubbleholidays.co/wp-json/wp/v2/shops?_embed"
  );
  const data = await res.json();
  console.log(data);
  const dt = "0";

  return {
    props: {
      props: dt,
    },
  };
}
