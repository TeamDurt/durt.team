<script lang="ts">
    import {_} from 'svelte-i18n';

    const links = {
        discord: "https://discord.durt.team",
        modrinth: "https://modrinth.durt.team",
        curseforge: "https://curseforge.durt.team"
    };
</script>

<div class="content-wrapper">
    <div class="content">
        <div class="info">
            <h1>Team Durt</h1>
            <p>{$_("home.about_us")}</p>
            <div class="icons">
                <a href={links.discord} target="_blank" aria-label="Join our Discord">
                    <svg class="icon discord" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#8287FF"/>
                        <g clip-path="url(#clip0_4765_3133)">
                            <path d="M35.1071 14.8425C33.0047 13.9693 30.7851 13.3499 28.5052 13C28.1933 13.5059 27.911 14.0264 27.6596 14.5594C25.231 14.2274 22.7614 14.2274 20.3328 14.5594C20.0813 14.0265 19.799 13.506 19.4872 13C17.2058 13.3529 14.9848 13.9738 12.8803 14.847C8.70219 20.4543 7.56958 25.9224 8.13589 31.3128C10.5827 32.9526 13.3213 34.1998 16.2328 35C16.8884 34.2002 17.4685 33.3517 17.9669 32.4635C17.0202 32.1427 16.1064 31.747 15.2361 31.2808C15.4651 31.1301 15.6891 30.9749 15.9056 30.8242C18.4378 31.9044 21.2017 32.4645 24 32.4645C26.7983 32.4645 29.5621 31.9044 32.0944 30.8242C32.3133 30.9863 32.5373 31.1416 32.7639 31.2808C31.8919 31.7477 30.9764 32.1442 30.028 32.4658C30.5258 33.3535 31.106 34.2013 31.7621 35C34.6761 34.203 37.4168 32.9564 39.8641 31.3151C40.5285 25.0639 38.7289 19.6461 35.1071 14.8425ZM18.6843 27.9977C17.1062 27.9977 15.8024 26.6986 15.8024 25.1005C15.8024 23.5023 17.0609 22.1918 18.6792 22.1918C20.2976 22.1918 21.5913 23.5023 21.5636 25.1005C21.5359 26.6986 20.2926 27.9977 18.6843 27.9977ZM29.3157 27.9977C27.7351 27.9977 26.4363 26.6986 26.4363 25.1005C26.4363 23.5023 27.6948 22.1918 29.3157 22.1918C30.9366 22.1918 32.2202 23.5023 32.1925 25.1005C32.1648 26.6986 30.924 27.9977 29.3157 27.9977Z"
                                  fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4765_3133">
                                <rect width="32" height="22" fill="white" transform="translate(8 13)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a href={links.modrinth} target="_blank" aria-label="Visit our Modrinth">
                    <svg class="icon modrinth" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#82DC57"/>
                        <g clip-path="url(#clip0_4765_3131)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M39.4473 28.1438C40.1592 25.5235 40.2073 22.687 39.4498 19.8761C37.1605 11.3762 28.3773 6.33154 19.833 8.6089C13.238 10.367 8.71172 15.9733 8.04297 22.3484H10.7492C11.393 17.1723 15.1086 12.6525 20.4842 11.2193C27.128 9.44811 33.9455 13.0223 36.323 19.2922L33.6892 19.9938C32.4773 17.0771 30.0355 14.9386 27.1436 14.0277L26.6598 16.7571C28.943 17.5957 30.7948 19.4864 31.4723 22.0022C32.4598 25.6685 30.6211 29.4251 27.2848 30.9834L28.0055 33.6598C32.3905 31.8575 35.0248 27.3183 34.4017 22.6391L37.0255 21.94C37.3067 23.7273 37.2092 25.5042 36.7842 27.1795L39.4473 28.1438Z"
                                  fill="white"/>
                            <path d="M28.1244 39.3911C19.5794 41.6685 10.7969 36.6238 8.50688 28.1239C8.24001 27.1321 8.07312 26.1373 8 25.1493H10.7044C10.7725 25.8907 10.9044 26.6366 11.105 27.3799C11.315 28.1588 11.5906 28.9027 11.9244 29.6075L14.3362 28.1662C14.1331 27.6993 13.9619 27.2125 13.8256 26.7063C12.3231 21.1281 15.6506 15.3942 21.2581 13.8995C22.3206 13.6162 23.3894 13.506 24.4331 13.5502L23.9494 16.2802C23.2956 16.2833 22.6319 16.3686 21.9706 16.5448C17.8319 17.6486 15.3756 21.8802 16.4844 25.9978C16.5531 26.2512 16.6331 26.4984 16.7244 26.7387L19.8088 24.8953L18.8794 22.4405L21.7919 19.4602L25.4731 18.6702L26.5387 19.977L24.8419 21.689L23.3619 22.1528L22.3044 23.2355L22.8225 24.6718C22.8225 24.6718 23.8719 25.7824 23.8737 25.783L25.3563 25.3902L26.4112 24.236L28.715 23.5094L29.4013 25.0472L27.0244 27.9502L23.0413 29.2065L21.255 27.2255L18.1412 29.0864C19.7375 30.8968 22.1375 31.9023 24.6256 31.6925L25.3463 34.3689C21.6331 34.8582 18.0063 33.3273 15.7531 30.5146L13.3525 31.949C16.5156 36.0884 21.99 38.1392 27.3506 36.7104C31.2094 35.6819 34.2125 33.0621 35.8388 29.7513L38.5037 30.7163C36.5731 34.8427 32.8887 38.1211 28.1244 39.3911Z"
                                  fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4765_3131">
                                <rect width="32" height="32" fill="white" transform="translate(8 8)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a href={links.curseforge} target="_blank" aria-label="Visit our CurseForge">
                    <svg class="icon curseforge" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#F6944D"/>
                        <path d="M19.5823 15V16.2475V18.9343H18.8532L18.1241 16.2475H5C11.1975 22.9263 16.3013 23.3485 17.9418 23.3485C19.5823 23.3485 21.4051 23.8091 21.4051 26.0354C21.4051 28.2616 19.0962 28.9461 17.9418 29.0101L16.0278 31.4091V34H20.2203C20.7975 33.3923 22.7175 32.1768 25.7797 32.1768C28.842 32.1768 30.7013 33.3923 31.2481 34H35.2582V31.4091L33.3443 29.0101C31.3392 29.0101 29.243 28.0505 29.243 25.2677C29.243 19.5869 37.081 17.0791 41 16.5354V15H19.5823Z"
                              fill="white"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="picture">
            <enhanced:img src="$lib/assets/img/hoglin.png" alt="Hoglin" sizes="min(400px; 100%)"/>
            <svg class="light" viewBox="0 0 286 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_4786_3173)">
                    <ellipse cx="102.473" cy="64.8082" rx="102.473" ry="64.8082"
                             transform="matrix(0.981735 -0.190254 0.330248 0.943894 21 62.9919)" fill="#8D3300"
                             fill-opacity="0.4"/>
                </g>
                <g filter="url(#filter1_f_4786_3173)">
                    <ellipse cx="62.2668" cy="39.0828" rx="62.2668" ry="39.0828"
                             transform="matrix(0.981735 -0.190254 0.330248 0.943894 65 87.693)" fill="#FF7A00"/>
                </g>
                <defs>
                    <filter id="filter0_f_4786_3173" x="0.130859" y="0.447083" width="285.748" height="208.442"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_4786_3173"/>
                    </filter>
                    <filter id="filter1_f_4786_3173" x="36.5469" y="33.9806" width="204.98" height="157.512"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_4786_3173"/>
                    </filter>
                </defs>
            </svg>
            <svg class="shadow" viewBox="0 0 528 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_4786_3168)">
                    <ellipse cx="264" cy="96" rx="200" ry="32" fill="#A14F35" fill-opacity="0.2"/>
                </g>
                <defs>
                    <filter id="filter0_f_4786_3168" x="0" y="0" width="528" height="192" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_4786_3168"/>
                    </filter>
                </defs>
            </svg>
        </div>
        <div class="icons">
            <a href={links.discord} target="_blank" aria-label="Join our Discord">
                <svg class="icon discord" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="24" fill="#8287FF"/>
                    <g clip-path="url(#clip0_4765_3133)">
                        <path d="M35.1071 14.8425C33.0047 13.9693 30.7851 13.3499 28.5052 13C28.1933 13.5059 27.911 14.0264 27.6596 14.5594C25.231 14.2274 22.7614 14.2274 20.3328 14.5594C20.0813 14.0265 19.799 13.506 19.4872 13C17.2058 13.3529 14.9848 13.9738 12.8803 14.847C8.70219 20.4543 7.56958 25.9224 8.13589 31.3128C10.5827 32.9526 13.3213 34.1998 16.2328 35C16.8884 34.2002 17.4685 33.3517 17.9669 32.4635C17.0202 32.1427 16.1064 31.747 15.2361 31.2808C15.4651 31.1301 15.6891 30.9749 15.9056 30.8242C18.4378 31.9044 21.2017 32.4645 24 32.4645C26.7983 32.4645 29.5621 31.9044 32.0944 30.8242C32.3133 30.9863 32.5373 31.1416 32.7639 31.2808C31.8919 31.7477 30.9764 32.1442 30.028 32.4658C30.5258 33.3535 31.106 34.2013 31.7621 35C34.6761 34.203 37.4168 32.9564 39.8641 31.3151C40.5285 25.0639 38.7289 19.6461 35.1071 14.8425ZM18.6843 27.9977C17.1062 27.9977 15.8024 26.6986 15.8024 25.1005C15.8024 23.5023 17.0609 22.1918 18.6792 22.1918C20.2976 22.1918 21.5913 23.5023 21.5636 25.1005C21.5359 26.6986 20.2926 27.9977 18.6843 27.9977ZM29.3157 27.9977C27.7351 27.9977 26.4363 26.6986 26.4363 25.1005C26.4363 23.5023 27.6948 22.1918 29.3157 22.1918C30.9366 22.1918 32.2202 23.5023 32.1925 25.1005C32.1648 26.6986 30.924 27.9977 29.3157 27.9977Z"
                              fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_4765_3133">
                            <rect width="32" height="22" fill="white" transform="translate(8 13)"/>
                        </clipPath>
                    </defs>
                </svg>
            </a>
            <a href={links.modrinth} target="_blank" aria-label="Visit our Modrinth">
                <svg class="icon modrinth" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="24" fill="#82DC57"/>
                    <g clip-path="url(#clip0_4765_3131)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M39.4473 28.1438C40.1592 25.5235 40.2073 22.687 39.4498 19.8761C37.1605 11.3762 28.3773 6.33154 19.833 8.6089C13.238 10.367 8.71172 15.9733 8.04297 22.3484H10.7492C11.393 17.1723 15.1086 12.6525 20.4842 11.2193C27.128 9.44811 33.9455 13.0223 36.323 19.2922L33.6892 19.9938C32.4773 17.0771 30.0355 14.9386 27.1436 14.0277L26.6598 16.7571C28.943 17.5957 30.7948 19.4864 31.4723 22.0022C32.4598 25.6685 30.6211 29.4251 27.2848 30.9834L28.0055 33.6598C32.3905 31.8575 35.0248 27.3183 34.4017 22.6391L37.0255 21.94C37.3067 23.7273 37.2092 25.5042 36.7842 27.1795L39.4473 28.1438Z"
                              fill="white"/>
                        <path d="M28.1244 39.3911C19.5794 41.6685 10.7969 36.6238 8.50688 28.1239C8.24001 27.1321 8.07312 26.1373 8 25.1493H10.7044C10.7725 25.8907 10.9044 26.6366 11.105 27.3799C11.315 28.1588 11.5906 28.9027 11.9244 29.6075L14.3362 28.1662C14.1331 27.6993 13.9619 27.2125 13.8256 26.7063C12.3231 21.1281 15.6506 15.3942 21.2581 13.8995C22.3206 13.6162 23.3894 13.506 24.4331 13.5502L23.9494 16.2802C23.2956 16.2833 22.6319 16.3686 21.9706 16.5448C17.8319 17.6486 15.3756 21.8802 16.4844 25.9978C16.5531 26.2512 16.6331 26.4984 16.7244 26.7387L19.8088 24.8953L18.8794 22.4405L21.7919 19.4602L25.4731 18.6702L26.5387 19.977L24.8419 21.689L23.3619 22.1528L22.3044 23.2355L22.8225 24.6718C22.8225 24.6718 23.8719 25.7824 23.8737 25.783L25.3563 25.3902L26.4112 24.236L28.715 23.5094L29.4013 25.0472L27.0244 27.9502L23.0413 29.2065L21.255 27.2255L18.1412 29.0864C19.7375 30.8968 22.1375 31.9023 24.6256 31.6925L25.3463 34.3689C21.6331 34.8582 18.0063 33.3273 15.7531 30.5146L13.3525 31.949C16.5156 36.0884 21.99 38.1392 27.3506 36.7104C31.2094 35.6819 34.2125 33.0621 35.8388 29.7513L38.5037 30.7163C36.5731 34.8427 32.8887 38.1211 28.1244 39.3911Z"
                              fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_4765_3131">
                            <rect width="32" height="32" fill="white" transform="translate(8 8)"/>
                        </clipPath>
                    </defs>
                </svg>
            </a>
            <a href={links.curseforge} target="_blank" aria-label="Visit our CurseForge">
                <svg class="icon curseforge" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="24" fill="#F6944D"/>
                    <path d="M19.5823 15V16.2475V18.9343H18.8532L18.1241 16.2475H5C11.1975 22.9263 16.3013 23.3485 17.9418 23.3485C19.5823 23.3485 21.4051 23.8091 21.4051 26.0354C21.4051 28.2616 19.0962 28.9461 17.9418 29.0101L16.0278 31.4091V34H20.2203C20.7975 33.3923 22.7175 32.1768 25.7797 32.1768C28.842 32.1768 30.7013 33.3923 31.2481 34H35.2582V31.4091L33.3443 29.0101C31.3392 29.0101 29.243 28.0505 29.243 25.2677C29.243 19.5869 37.081 17.0791 41 16.5354V15H19.5823Z"
                          fill="white"/>
                </svg>
            </a>
        </div>
    </div>
</div>

<style lang="scss">
  .content-wrapper {
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #131313;
    overflow: hidden;
  }

  .content, .info {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content {
    gap: 12px;
  }

  .info {
    gap: 4px;

    & > h1 {
      font-weight: 700;
      font-size: 24px;
    }

    & > p {
      text-align: center;
    }

    & > .icons {
      display: none;
    }
  }

  .icons {
    display: flex;
    flex-direction: row;
    gap: 16px;
    z-index: 2;

    & > a {
      width: 32px;
      height: 32px;
      border-radius: 50%;

      & > .icon {
        width: 100%;
        height: 100%;
        border-radius: 50%;

        transition-duration: .3s;

        & > rect {
          transition-duration: .3s;
        }

        &.discord:hover {
          box-shadow: 0 0 8px 0 #494FD566;

          & > rect {
            fill: #8F94FF;
          }
        }

        &.modrinth:hover {
          box-shadow: 0 0 8px 0 #82DC5766;

          & > rect {
            fill: #92E75E;
          }
        }

        &.curseforge:hover {
          box-shadow: 0 0 8px 0 #F6944D66;

          & > rect {
            fill: #FAA455;
          }
        }
      }
    }
  }

  .picture {
    position: relative;
    width: 100%;
    height: fit-content;
    z-index: 1;

    & img {
      position: relative;
      width: 100%;
      height: auto;
      z-index: 1;
    }

    & > .light {
      position: absolute;
      top: 0;
      right: 11%;
      transform: translateY(-11%);

      width: 71.5%;
      height: fit-content;
      z-index: 0;
    }

    & > .shadow {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) translateY(25%);

      width: 132%;
      height: fit-content;
      z-index: 0;
    }
  }

  @media screen and (min-width: 640px) {
    .content-wrapper {
      padding: 32px;
    }

    .content {
      gap: 20px;
    }

    .info {
      & > h1 {
        font-size: 40px;
      }

      & > p {
        font-size: 20px;
      }
    }

    .picture {
      width: 400px;
    }

    .icons > a {
      width: 48px;
      height: 48px;
    }
  }

  @media screen and (min-width: 768px) {
    .info {
      gap: 8px;

      & > h1 {
        font-size: 48px;
      }

      & > p {
        font-size: 24px;
        max-width: 640px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .content {
      max-width: 1120px;
      flex-direction: row;
      justify-content: space-between;

      & > .icons {
        display: none;
      }
    }

    .info {
      width: fit-content;
      flex-grow: 1;
      align-items: flex-start;

      & > .icons {
        display: flex;
        margin-top: 24px;
      }

      & > p {
        text-align: left;
      }
    }
  }
</style>
