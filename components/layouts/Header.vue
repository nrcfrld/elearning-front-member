<template>
  <header
    :class="{
      'is-transparent is-dark border-b backdrop-filter backdrop-blur-2xl':
        $route.name === 'index' ||
        $route.name === 'courses-slug' ||
        $route.name === 'faq',
    }"
    :uk-sticky="
      $route.name === 'index' ||
      $route.name === 'courses-slug' ||
      $route.name === 'faq'
        ? 'cls-inactive: is-dark is-transparent border-b'
        : null
    "
  >
    <div class="header_inner">
      <div class="left-side">
        <!-- Logo -->
        <div id="logo">
          <nuxt-link to="/">
            <img
              src="http://demo.foxthemes.net/courseplus-v4.2/assets/images/logo.png"
              alt=""
            />
            <img
              src="http://demo.foxthemes.net/courseplus-v4.2/assets/images/logo-light.png"
              class="logo_inverse"
              alt=""
            />
            <img
              src="http://demo.foxthemes.net/courseplus-v4.2/assets/images/logo-mobile.png"
              class="logo_mobile"
              alt=""
            />
          </nuxt-link>
        </div>

        <!-- icon menu for mobile -->
        <div
          class="triger"
          uk-toggle="target: .header_menu ; cls: is-visible"
        ></div>

        <!-- menu bar for mobile -->
        <nav class="header_menu">
          <ul>
            <li>
              <a href="#">Courses</a>
              <div uk-drop="mode: click" class="xdropdown">
                <ul>
                  <li>
                    <nuxt-link
                      :to="{ name: 'categories' }"
                      class="text-gray-500"
                    >
                      Online Courses
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      :to="{ name: 'categories' }"
                      class="text-gray-500"
                    >
                      Onsite Courses
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Categories</a>
              <div uk-drop="mode: click" class="xdropdown">
                <ul>
                  <li>
                    <a href="#"> Development </a>
                    <div
                      class="xdropdown"
                      uk-drop="mode: click;pos:right-top;animation: uk-animation-slide-right-small"
                    >
                      <ul>
                        <li>
                          <a href="development-elements.html"> Elements </a>
                        </li>
                        <li>
                          <a href="development-components.html">
                            Compounents
                          </a>
                        </li>
                        <li>
                          <a href="development-plugins.html"> Plugins </a>
                        </li>
                        <li><a href="development-icons.html"> Icons </a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="course-intro.html"> Course intro 1 </a>
                    <div
                      uk-drop="mode: click;pos:right-center"
                      class="xdropdown"
                    >
                      <ul>
                        <li><a href="pages-pricing.html"> Pricing</a></li>
                        <li><a href="pages-faq.html"> Faq </a></li>
                        <li><a href="pages-help.html"> Help </a></li>
                        <li><a href="pages-terms.html"> Terms </a></li>
                        <li><a href="pages-setting.html"> Setting </a></li>
                        <li>
                          <a href="#"> Development </a>
                          <div
                            class="xdropdown"
                            uk-drop="mode: click;pos:right-top;animation: uk-animation-slide-right-small"
                          >
                            <ul>
                              <li>
                                <a href="development-elements.html">
                                  Elements
                                </a>
                              </li>
                              <li>
                                <a href="development-components.html">
                                  Compounents
                                </a>
                              </li>
                              <li>
                                <a href="development-plugins.html"> Plugins </a>
                              </li>
                              <li>
                                <a href="development-icons.html"> Icons </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="course-intro.html"> Course intro 1 </a>
                        </li>
                        <li>
                          <a href="course-intro-2.html"> Course intro 2 </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="course-intro-2.html"> Course intro 2 </a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Bantuan</a>
              <div uk-drop="mode: click" class="xdropdown">
                <ul>
                  <li>
                    <nuxt-link :to="{ name: 'faq' }" class="text-gray-500">
                      FAQ
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link :to="{ name: 'help' }" class="text-gray-500">
                      Pusat Bantuan
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>

        <!-- overly for small devices -->
        <div
          class="overly"
          uk-toggle="target: .header_menu ; cls: is-visible"
        ></div>
      </div>
      <div class="right-side">
        <template v-if="$auth.loggedIn">
          <!-- messages -->
          <a href="#" class="header_widgets">
            <ion-icon name="notifications-outline" class="is-icon"></ion-icon>
            <span> 2 </span>
          </a>
          <div uk-drop="mode: click" class="header_dropdown">
            <div class="drop_headline">
              <h4>Messages</h4>
              <div class="btn_action">
                <a href="#">
                  <ion-icon
                    name="settings-outline"
                    uk-tooltip="title: Message settings ; pos: left"
                  ></ion-icon>
                </a>
                <a href="#">
                  <ion-icon
                    name="checkbox-outline"
                    uk-tooltip="title: Mark as read all ; pos: left"
                  ></ion-icon>
                </a>
              </div>
            </div>
            <ul class="dropdown_scrollbar" data-simplebar>
              <li>
                <a href="#">
                  <div class="drop_avatar">
                    <img src="images/avatars/avatar-1.jpg" alt="" />
                  </div>
                  <div class="drop_content">
                    <strong> John menathon </strong>
                    <span class="time"> 6:43 PM</span>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="drop_avatar">
                    <img src="images/avatars/avatar-2.jpg" alt="" />
                  </div>
                  <div class="drop_content">
                    <strong> Zara Ali </strong>
                    <span class="time">12:43 PM</span>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="drop_avatar">
                    <img src="images/avatars/avatar-3.jpg" alt="" />
                  </div>
                  <div class="drop_content">
                    <strong> Mohamed Ali </strong>
                    <span class="time"> Wed</span>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="drop_avatar">
                    <img src="images/avatars/avatar-1.jpg" alt="" />
                  </div>
                  <div class="drop_content">
                    <strong> John menathon </strong>
                    <span class="time"> Sun </span>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="drop_avatar">
                    <img src="images/avatars/avatar-2.jpg" alt="" />
                  </div>
                  <div class="drop_content">
                    <strong> Zara Ali </strong> <span class="time"> Fri </span>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="drop_avatar">
                    <img src="images/avatars/avatar-3.jpg" alt="" />
                  </div>
                  <div class="drop_content">
                    <strong> Mohamed Ali </strong>
                    <span class="time">1 Week ago</span>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </a>
              </li>
            </ul>
            <a href="#" class="see-all">See all</a>
          </div>

          <!-- profile -->
          <a href="#">
            <img
              :src="$auth.user.avatar"
              class="header_widgets_avatar"
              :alt="$auth.user.name"
            />
          </a>
          <div
            uk-drop="mode: click;offset:5"
            class="header_dropdown profile_dropdown"
          >
            <ul>
              <li>
                <a href="#" class="user">
                  <div class="user_avatar">
                    <img :src="$auth.user.avatar" :alt="$auth.user.name" />
                  </div>
                  <div class="user_name">
                    <div>{{ $auth.user.name }}</div>
                    <span> {{ $auth.user.email }} </span>
                  </div>
                </a>
              </li>
              <li>
                <hr />
              </li>
              <li>
                <a href="#" class="is-link">
                  <ion-icon name="rocket-outline" class="is-icon"></ion-icon>
                  <span> Upgrade Membership </span>
                </a>
              </li>
              <li>
                <hr />
              </li>
              <li>
                <a href="page-setting.html">
                  <ion-icon
                    name="person-circle-outline"
                    class="is-icon"
                  ></ion-icon>
                  My Account
                </a>
              </li>
              <li>
                <a href="group-feed.html">
                  <ion-icon name="card-outline" class="is-icon"></ion-icon>
                  Subscriptions
                </a>
              </li>
              <li>
                <a href="group-feed.html">
                  <ion-icon
                    name="color-wand-outline"
                    class="is-icon"
                  ></ion-icon>
                  My Billing
                </a>
              </li>
              <li>
                <a href="group-feed.html">
                  <ion-icon name="settings-outline" class="is-icon"></ion-icon>
                  Account Settings
                </a>
              </li>
              <li>
                <hr />
              </li>
              <li>
                <a
                  id="night-mode"
                  href="#"
                  class="btn-night-mode"
                  onclick="UIkit.notification({ message: 'Hmm...  <strong> Night mode </strong> feature is not available yet. ' , pos: 'bottom-right'  })"
                >
                  <ion-icon name="moon-outline" class="is-icon"></ion-icon>
                  Night mode
                  <span class="btn-night-mode-switch">
                    <span class="uk-switch-button"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" @click.prevent="logout">
                  <ion-icon name="log-out-outline" class="is-icon"></ion-icon>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </template>

        <template v-else>
          <div>
            <nuxt-link
              :to="{ name: 'account-login' }"
              class="
                bg-purple-500
                hover:bg-purple-600
                purple-500
                px-6
                py-3
                rounded-md
                shadow
                text-white
                hover:text-white
              "
              >Log In</nuxt-link
            >
          </div>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>

<style lang="scss" scoped></style>
