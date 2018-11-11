import React, { Fragment } from "react";

const getViewBox = name => {
  switch (name) {
    case "heart":
      return "0 0 511.626 511.627";
    case "dribbble-logo":
      return "10.44 11.653 497.119 124.694";
    case "upload":
      return "0 0 612 612";
    case "dribbble-ball":
      return "0 0 430.117 430.118";
    case "twitter":
      return "0 0 512 512";
    case "facebook":
      return "0 0 408.788 408.788";
    case "instagram":
      return "0 0 169.063 169.063";
    case "world":
      return "0 0 533.333 533.333";
    case "nav":
      return "0 0 500 500";
    case "search":
      return "0 0 446.25 446.25";
    case "palette":
      return "0 0 24 24";
    case "downArrow":
      return "0 0 451.847 451.847";
    case "settings":
      return "0 0 268.765 268.765";
    case "delete":
      return "0 0 510 510";
    case "questionMark":
      return "0 0 29.536 29.536";
    default:
      return "0 0 306 306";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "heart":
      return (
        <path
          {...props}
          viewBox="0 0 511.626 511.627"
          d="M475.7,72c-24.2-23.6-57.6-35.4-100.3-35.4c-11.8,0-23.9,2-36.1,6.1c-12.3,4.1-23.7,9.6-34.3,16.6
		c-10.6,7-19.7,13.5-27.3,19.6c-7.6,6.1-14.9,12.6-21.7,19.4c-6.9-6.9-14.1-13.3-21.7-19.4c-7.6-6.1-16.7-12.6-27.3-19.6
		c-10.6-7-22-12.5-34.3-16.6c-12.3-4.1-24.3-6.1-36.1-6.1C93.9,36.6,60.5,48.4,36.3,72C12.1,95.6,0,128.4,0,170.3
		c0,12.8,2.2,25.9,6.7,39.4c4.5,13.5,9.6,25,15.3,34.6c5.7,9.5,12.2,18.8,19.4,27.9c7.2,9,12.5,15.3,15.9,18.7
		c3.3,3.4,6,5.9,7.9,7.4l178.3,172l12.6,11.1l12.6-11.1l178-171.4c43.6-43.6,65.4-86.5,65.4-128.6C512,128.4,499.9,95.6,475.7,72z"
        />
      );
    case "dribbble-logo":
      return (
        <Fragment>
          <path
            {...props}
            d="M201.398 105.244c-1.085 1.707-1.952 3.172-2.917 4.568-3.089 4.468-6.069 9.021-9.384 13.314-1.787 2.312-4.047 4.314-6.31 6.199-7.846 6.537-17.161 3.139-21.72-2.551-1.211-1.51-2.208-3.188-3.237-4.693-2.243 2.016-4.402 4.173-6.787 6.047-3.834 3.016-8.11 4.973-13.167 4.704-5.672-.3-9.975-2.91-13.028-7.631-3.004-4.646-4.191-9.884-4.773-15.278-.685-6.333-.485-12.67.182-18.999.115-1.088.178-2.19.15-3.284-.05-2.041-.875-3.146-2.876-3.517-2.757-.509-5.55-.83-8.254-1.224-1.502 3.897-2.827 7.724-4.433 11.426-4.134 9.527-9.343 18.447-15.757 26.63-1.345 1.716-2.902 3.307-4.555 4.731-5.704 4.928-12.354 5.502-18.76 1.504-2.279-1.422-4.25-3.338-6.156-4.863-2.334 2.631-4.58 5.621-7.281 8.118-7.132 6.596-15.367 7.532-23.985 3.456-10.014-4.735-15.615-12.953-17.372-23.814-1.253-7.743-.366-15.236 3.187-22.279 3.032-6.012 7.352-10.828 14.161-12.404 5.168-1.196 10.418-.936 15.524 1.138-.328-3.071-.732-6.086-.959-9.113-.964-12.918-.735-25.745 3.271-38.238.994-3.099 2.275-6.069 4.326-8.648 4.146-5.212 10.715-6.218 16.176-2.365 4.576 3.229 7.07 7.929 8.705 13.109 1.89 5.983 2.19 12.192 2.096 18.405-.323 21.197-4.323 41.658-12.442 61.281-.215.521-.191 1.344.082 1.818.874 1.521 1.802 3.042 2.925 4.381 1.269 1.514 2.151 1.529 3.892.598 6.233-3.338 10.819-8.223 14.37-14.344 4.27-7.359 8.149-14.853 10.732-22.979.283-.893.244-1.438-.562-2.157-4.812-4.297-7.265-9.684-6.516-16.167.688-5.951 5.969-8.873 11.495-6.486 5.146 2.223 7.818 6.506 9.119 11.748.749 3.019.673 3.047 3.818 3.506 3.96.579 7.957.969 11.877 1.746 6.412 1.271 9.299 4.732 9.288 11.269-.007 4.093-.54 8.182-.756 12.274-.267 5.056-.45 10.119.746 15.097a13.754 13.754 0 0 0 1.333 3.445c1.357 2.438 3.688 3.266 6.214 2.075 1.439-.678 2.864-1.61 3.955-2.754 2.267-2.376 4.33-4.948 6.408-7.495.308-.377.366-1.062.335-1.595-.606-10.479.131-20.881 1.782-31.225.762-4.77 2.278-5.578 6.745-3.771 4.672 1.89 6.565 4.634 6.42 9.692-.183 6.293-.581 12.582-.73 18.875-.101 4.287-.176 8.613 1.039 12.787.432 1.482 1.086 2.981 1.978 4.233 2.079 2.923 5.578 3.274 8.162.81 1.436-1.369 2.753-2.938 3.812-4.612 5.623-8.908 11.154-17.874 16.688-26.839.303-.489.476-1.15.47-1.73-.112-11.177.357-22.324 1.811-33.412 1.079-8.235 2.457-16.429 5.75-24.118 1.112-2.597 2.56-5.155 4.331-7.344 3.629-4.484 8.732-4.862 13.273-1.268 3.794 3.003 5.492 7.097 5.834 11.818.534 7.352-1 14.428-3.015 21.415-3.923 13.609-9.688 26.462-16.188 39.011a6.538 6.538 0 0 0-.691 3.101c.233 6.831.772 13.63 3.277 20.086.739 1.903 1.532 3.828 2.616 5.544 1.105 1.75 2.428 3.448 3.963 4.826 2.911 2.613 6.127 2.705 9.25.341a19.235 19.235 0 0 0 3.885-3.954c2.812-3.854 4.313-8.26 4.724-13.003.054-.614-.373-1.387-.801-1.903-1.21-1.465-2.688-2.726-3.79-4.261-3.65-5.086-6.386-10.606-7.375-16.87a11.754 11.754 0 0 1-.137-1.708c-.045-4.687 2.885-6.96 7.316-5.345 1.951.711 3.879 1.941 5.362 3.4 5.349 5.252 8.623 11.685 9.996 19.062.184.979.146 1.935 1.559 2.103 2.149.259 3.096.029 3.788-1.424.509-1.068.763-2.273 1.354-3.287 1.151-1.967 2.479-3.828 3.699-5.754 1.25-1.971 2.486-3.949 3.66-5.965.213-.365.123-.93.117-1.398-.14-11.13.366-22.229 1.812-33.271 1.041-7.95 2.369-15.867 5.476-23.312 1.18-2.824 2.71-5.615 4.613-7.996 3.585-4.486 8.778-4.828 13.271-1.241 3.78 3.021 5.479 7.111 5.814 11.831.526 7.351-1.009 14.427-3.023 21.413-3.943 13.654-9.705 26.562-16.283 39.122-.301.574-.662 1.234-.643 1.844.248 7.209.731 14.393 3.322 21.235 1.203 3.18 2.616 6.253 4.934 8.803a14.421 14.421 0 0 0 2.334 2.095c2.607 1.846 5.377 2.01 7.993.157 1.534-1.085 2.997-2.401 4.142-3.889 3.035-3.945 4.604-8.521 5.056-13.466.049-.534-.121-1.314-.49-1.627-4.396-3.713-7.103-8.573-9.246-13.756-1.013-2.441-1.529-5.091-2.238-7.656-.125-.449-.121-.943-.133-1.42-.123-5.103 3.096-7.333 7.897-5.475 2.659 1.029 4.732 2.861 6.509 5.01 4.361 5.28 7.372 11.217 8.371 18.058.122.832.481 1.138 1.196 1.301 2.721.624 3.782-.045 4.576-2.758.223-.761.66-1.472 1.084-2.151 2.212-3.562 4.474-7.099 6.655-10.68.349-.57.548-1.331.542-2.001-.095-10.364.299-20.704 1.53-30.999 1.052-8.768 2.373-17.507 5.771-25.724 1.202-2.91 2.817-5.771 4.793-8.212 3.449-4.267 8.638-4.57 12.963-1.163 3.844 3.027 5.599 7.138 5.944 11.914.534 7.352-1.008 14.428-3.019 21.415-3.92 13.611-9.687 26.461-16.188 39.008a6.524 6.524 0 0 0-.702 3.102c.252 6.877.846 13.711 3.316 20.229 1.174 3.09 2.572 6.062 4.781 8.566a14.91 14.91 0 0 0 2.189 2.044c2.709 2.041 5.576 2.216 8.354.271 1.499-1.051 2.914-2.354 4.025-3.806 3.026-3.95 4.614-8.516 5.062-13.462.05-.54-.099-1.33-.465-1.639-4.469-3.781-7.15-8.747-9.385-14.004-1.329-3.129-2.354-6.358-2.242-9.82.086-2.708 1.374-4.589 3.516-4.913 1.104-.167 2.3-.102 3.396.136 2.354.511 4.256 1.918 5.896 3.612 5.25 5.417 8.645 11.829 9.865 19.291.223 1.356.801 1.8 1.98 1.825 1.428.029 2.909.263 4.271-.039 1.272-.282 2.521-1.01 3.567-1.814.477-.367.75-1.463.601-2.108-4.891-21.181-3.754-42.236 1.225-63.21 1.192-5.024 2.987-9.848 5.742-14.26a25.382 25.382 0 0 1 1.83-2.557c5.021-6.151 12.217-6.75 18.221-1.51 4.03 3.519 6.188 8.168 7.704 13.152 2.317 7.611 2.839 15.448 2.723 23.348-.124 8.379-.885 16.658-3.834 24.604-2.896 7.804-7.613 14.48-12.761 20.901-.864 1.079-1.79 2.115-2.595 3.238-.247.346-.398 1.022-.229 1.362 1.81 3.565 3.642 7.125 5.587 10.616.616 1.107 1.524 2.074 2.409 3.003 1.403 1.477 3.131 2.191 5.229 2.237 5.671.123 10.693-1.493 15.098-5.11.938-.771 1.147-1.455.935-2.646-2.606-14.494 1.258-27.042 11.81-37.313 5.122-4.987 11.447-7.428 18.712-7.176 11.148.388 19.408 10.245 17.771 21.3-1.425 9.603-6.847 16.691-14.323 22.42-3.977 3.045-8.447 5.153-13.56 6.575.57.438.967.794 1.411 1.069 5.132 3.158 10.797 3.855 16.655 3.495 10.312-.638 17.954-6.026 24.226-13.784 1.049-1.297 1.989-2.68 3.006-4.004 1.188-1.549 2.214-1.699 3.543-.277 2.344 2.504 3.834 5.454 3.946 8.956.058 1.772-.517 3.373-1.608 4.784-10.391 13.417-24.078 19.468-40.968 18.277-7.587-.534-14.584-2.795-20.607-7.594-1.263-1.006-2.392-2.175-3.294-3.005-4.018 2.19-7.819 4.574-11.875 6.397-5.016 2.255-10.354 3.357-15.897 2.314-6.075-1.146-10.8-4.587-14.391-9.418-2.457-3.308-4.36-7.022-6.497-10.565-.27-.443-.444-.942-.706-1.513-4.598 1.356-9.215 1.305-13.717.395-.872 3.064-1.609 6.06-2.58 8.975-1.515 4.557-3.884 8.631-7.686 11.67-6.281 5.023-13.106 5.186-20.132 1.815-5.552-2.663-9.551-7.062-12.729-12.228-2.761-4.492-4.916-9.254-5.888-14.483-.033-.179-.138-.343-.336-.82-3.453 5.751-8.483 6.695-14.184 4.992-.896 3.146-1.661 6.13-2.604 9.058-1.154 3.574-2.951 6.824-5.509 9.604-5.461 5.938-12.826 7.651-20.355 4.751-5.098-1.965-9.038-5.423-12.329-9.688-4.021-5.214-6.119-9.925-8.637-19.406-3.138 6.344-8.187 7.502-14.047 5.697-1.116 3.645-2.019 7.141-3.279 10.504-.792 2.115-1.936 4.159-3.237 6.016-5.75 8.189-15.022 10.476-23.996 6.02-4.962-2.464-8.712-6.274-11.789-10.803-3.208-4.733-4.553-7.994-7.278-17.677zM34.944 123.693c4.382.104 8.274-1.127 10.953-4.637 2.267-2.973 4.064-6.305 6.012-9.513.19-.313.055-.899-.069-1.319a2657.225 2657.225 0 0 0-5.113-17.096c-.172-.566-.409-1.2-.816-1.6-4.633-4.545-12.725-5.223-17.604.021-1.631 1.752-3.139 3.775-4.133 5.938-3.43 7.461-2.894 15.023.146 22.479 1.107 2.715 3.218 4.496 6.103 5.152 1.474.337 3.012.394 4.521.575zm23.092-31.327c.183-.009.364-.019.545-.026 1.072-4.539 2.252-9.055 3.194-13.62 2.561-12.407 4.248-24.916 3.86-37.626-.121-3.963-.493-7.91-2.014-11.636-.866-2.124-1.902-2.291-3.451-.591-1.781 1.957-2.688 4.366-3.394 6.856-1.746 6.161-2.095 12.498-2.203 18.845-.158 9.223.529 18.404 1.711 27.543.446 3.436 1.16 6.838 1.752 10.255zm341.571-6.723c2.188-2.391 3.728-4.94 5.011-7.641 5.132-10.791 6.916-22.218 6.227-34.064-.229-3.947-.779-7.879-2.419-11.549-.524-1.176-1.104-2.589-2.556-2.61-1.458-.021-1.979 1.465-2.317 2.592-1.066 3.547-2.177 7.105-2.866 10.736-1.752 9.198-2.271 18.531-2.578 27.873-.164 4.868.365 9.665 1.498 14.663zm49.018 18.569l.552.183c.708-.271 1.425-.521 2.12-.819 6.432-2.774 11.83-6.784 14.922-13.247.854-1.782 1.322-3.903 1.365-5.882.073-3.375-2.736-5.349-6.024-4.565-2.498.596-4.484 2.04-6.189 3.896-3.282 3.572-5.21 7.839-6.021 12.566-.448 2.586-.497 5.242-.725 7.868zm-228.54-76.165c-4.164 3.379-9.395 30.516-8.335 35.37 3.929-6.006 9.313-28.695 8.335-35.37zm63.665.222c-3.708 3.072-9.424 30.182-8.377 35.52 4.775-11.627 7.677-23.305 8.377-35.52zm55.01 35.063c4.737-11.24 7.76-22.89 8.688-35.037l-.734-.175c-4.951 11.183-7.213 23.013-7.954 35.212z"
          />
          <path
            {...props}
            d="M152.124 51.287c.004-5.626 3.923-9.875 9.57-10.375 5.129-.454 10.107 3.622 11.029 9.034.478 2.806.179 5.52-1.085 8.083-1.818 3.688-5.527 5.572-9.593 4.926-5.867-.931-9.926-5.705-9.921-11.668z"
          />
        </Fragment>
      );
    case "upload":
      return (
        <path
          {...props}
          d="M494.7,258c-17.9-86.7-94.4-153-188.7-153c-74,0-137.7,40.8-168.3,102C58.7,217.2,0,281,0,360c0,84.2,68.8,153,153,153
			h102.6l-0.6-98.3h-76.5L306,298l127.5,116.7H357l0.6,98.3h126.9c71.4,0,127.5-56.1,127.5-127.5C612,319.2,558.5,263.1,494.7,258z"
        />
      );
    case "dribbble-ball":
      return (
        <path
          {...props}
          d="M215.05,0C96.274,0.009,0,96.289,0,215.068c0,118.758,96.274,215.049,215.05,215.049
		c118.776,0,215.054-96.291,215.067-215.049C430.104,96.289,333.826,0.009,215.05,0z M346.819,111.506
		c20.983,26.645,34.121,59.638,35.778,95.668c-24.278-5.153-47.217-7.661-68.602-7.661v-0.005h-0.158
		c-17.217,0-33.375,1.563-48.604,4.264c-3.701-9.071-7.453-17.784-11.233-26.129C287.916,162.767,320.47,141.585,346.819,111.506z
		 M215.05,47.28c39.576,0,75.882,13.836,104.626,36.87c-21.996,26.334-51.029,45.406-82.393,58.873
		c-22.038-42.615-43.333-73.101-57.89-91.739C190.916,48.727,202.81,47.28,215.05,47.28z M140.941,64.77
		c11.646,13.756,34.963,44.013,59.867,91.253c-50.649,15.077-101.651,18.619-132.51,18.61c-0.88,0-1.75,0-2.604-0.009h-0.028
		c-5.197,0-9.666-0.082-13.397-0.196C64.308,126.254,97.311,86.357,140.941,64.77z M47.266,215.068c0-0.789,0.028-1.591,0.075-2.417
		c4.791,0.177,10.935,0.329,18.33,0.329h0.042c33.727-0.22,92.614-3.038,152.292-21.879c3.253,7.113,6.473,14.519,9.656,22.208
		c-39.853,13.329-71.241,34.564-94.457,55.711C110.854,289.377,95.754,309.54,86.931,323
		C62.242,293.769,47.279,256.204,47.266,215.068z M215.05,382.859c-37.339,0-71.754-12.349-99.673-33.07
		c5.934-9.773,18.657-28.535,38.917-47.922c20.845-19.975,49.62-40.538,87.19-52.775c12.77,35.797,24.325,76.718,33.127,122.781
		C256.068,378.934,236.032,382.859,215.05,382.859z M310.011,353.065c-8.513-41.659-19.215-79.224-30.966-112.748
		c10.897-1.563,22.336-2.445,34.41-2.445h0.434h0.028h0.028c20.012,0,42.003,2.487,65.852,7.906
		C371.541,290.143,345.844,328.352,310.011,353.065z"
        />
      );
    case "twitter":
      return (
        <path
          {...props}
          d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			C480.224,136.96,497.728,118.496,512,97.248z"
        />
      );
    case "facebook":
      return (
        <path
          {...props}
          d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085
	h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882
	v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955
	l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087
	c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085
	C408.786,24.662,384.124,0,353.701,0z"
        />
      );
    case "instagram":
      return (
        <Fragment>
          <path
            {...props}
            d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"
          />
          <path
            {...props}
            d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
          />
          <path
            {...props}
            d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"
          />
        </Fragment>
      );
    case "world":
      return (
        <path
          {...props}
          d="M455.229,78.105c50.367,50.367,78.104,117.333,78.104,188.563c0,71.229-27.739,138.194-78.104,188.561
		c-50.368,50.366-117.333,78.104-188.562,78.104c-71.229,0-138.195-27.738-188.562-78.104C27.738,404.862,0,337.896,0,266.668
		c0-71.229,27.736-138.196,78.104-188.563S195.438,0,266.667,0C337.896,0,404.861,27.738,455.229,78.105z M431.658,431.659
		c32.843-32.843,54.681-73.754,63.686-118.262c-7.019,10.331-13.732,14.165-17.888-8.961c-4.281-37.703-38.911-13.618-60.688-27.011
		c-22.919,15.447-74.43-30.032-65.676,21.263c13.507,23.137,72.921-30.964,43.307,17.99
		c-18.893,34.176-69.085,109.86-62.555,149.093c0.823,57.158-58.404,11.919-78.81-7.041
		c-13.727-37.979-4.678-104.362-40.572-122.962c-38.959-1.691-72.398-5.232-87.497-48.786c-9.086-31.161,9.669-77.549,43.062-84.71
		c48.88-30.711,66.341,35.965,112.183,37.205c14.233-14.893,53.029-19.628,56.246-36.328c-30.078-5.308,38.16-25.291-2.879-36.657
		c-22.642,2.663-37.229,23.476-25.193,41.124c-43.874,10.23-45.279-63.492-87.454-40.238c-1.072,36.765-68.865,11.919-23.456,4.464
		c15.602-6.816-25.448-26.57-3.271-22.98c10.894-0.592,47.569-13.444,37.644-22.084c20.421-12.677,37.583,30.359,57.572-0.98
		c14.431-24.097-6.052-28.546-24.141-16.332c-10.198-11.418,18.006-36.081,42.882-46.738c8.29-3.552,16.208-5.487,22.263-4.939
		c12.531,14.475,35.703,16.982,36.916-1.741c-31.031-14.861-65.247-22.712-100.672-22.712c-50.845,0-99.203,16.158-139.223,46.036
		c10.755,4.927,16.86,11.062,6.499,18.904c-8.05,23.987-40.713,56.186-69.387,51.627c-14.889,25.674-24.694,53.961-28.885,83.608
		c24.016,7.946,29.554,23.672,24.394,28.932c-12.237,10.671-19.759,25.797-23.633,42.355c7.817,47.832,30.298,91.914,65.245,126.862
		C145.746,475.729,204.34,500,266.667,500C328.992,500,387.587,475.729,431.658,431.659z"
        />
      );
    case "nav":
      return (
        <Fragment>
          <path
            {...props}
            d="M470.2,422.3H28.5C12.8,422.3,0,409.5,0,393.9l0-18.2c0-15.7,12.8-28.5,28.5-28.5h441.8
	c15.7,0,28.5,12.8,28.5,28.5v18.2C498.7,409.5,485.9,422.3,470.2,422.3z"
          />
          <path
            {...props}
            d="M471.2,286.6H29.4C13.8,286.6,1,273.8,1,258.2v-18.2c0-15.7,12.8-28.5,28.5-28.5h441.8
	c15.7,0,28.5,12.8,28.5,28.5v18.2C499.7,273.8,486.9,286.6,471.2,286.6z"
          />
          <path
            {...props}
            d="M471.4,150.9H29.6c-15.7,0-28.5-12.8-28.5-28.5v-18.2c0-15.7,12.8-28.5,28.5-28.5h441.8
	c15.7,0,28.5,12.8,28.5,28.5v18.2C499.8,138.1,487,150.9,471.4,150.9z"
          />
        </Fragment>
      );
    case "search":
      return (
        <path
          {...props}
          d="M318.75,280.5h-20.4l-7.649-7.65c25.5-28.05,40.8-66.3,40.8-107.1C331.5,73.95,257.55,0,165.75,0S0,73.95,0,165.75
			S73.95,331.5,165.75,331.5c40.8,0,79.05-15.3,107.1-40.8l7.65,7.649v20.4L408,446.25L446.25,408L318.75,280.5z M165.75,280.5
			C102,280.5,51,229.5,51,165.75S102,51,165.75,51S280.5,102,280.5,165.75S229.5,280.5,165.75,280.5z"
        />
      );
    case "palette":
      return (
        <path
          {...props}
          d="m23.968 11.113c-.413-5.752-5.032-10.5-10.772-11.055-7.152-.692-13.174 4.9-13.196 11.904-.007 2.222 1.778 4.038 4 4.038h2.297c1.364 0 2.423 1.343 1.949 2.622-.236.638-.313 1.352-.183 2.092.341 1.939 2.135 3.311 4.104 3.285 6.843-.093 12.302-5.914 11.801-12.886zm-16.968-3.113c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm7-1c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm4 12c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm1-7c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"
        />
      );
    case "downArrow":
      return (
        <path
          {...props}
          d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
        />
      );
    case "settings":
      return (
        <path
          {...props}
          d="M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617
			c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133
			c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529
			c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08
			c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574
			c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214
			c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597
			c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415
			c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508
			c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167
			c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817
			c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572
			c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213
			c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043
			c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491
			c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824
			C179.418,159.385,159.312,179.491,134.595,179.491z"
        />
      );
    case "delete":
      return (
        <path
          {...props}
          d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M382.5,346.8l-35.7,35.7
			L255,290.7l-91.8,91.8l-35.7-35.7l91.8-91.8l-91.8-91.8l35.7-35.7l91.8,91.8l91.8-91.8l35.7,35.7L290.7,255L382.5,346.8z"
        />
      );
    case "questionMark":
      return (
        <Fragment>
          <path
            {...props}
            d="M14.768,0C6.611,0,0,6.609,0,14.768c0,8.155,6.611,14.767,14.768,14.767s14.768-6.612,14.768-14.767
		C29.535,6.609,22.924,0,14.768,0z M14.768,27.126c-6.828,0-12.361-5.532-12.361-12.359c0-6.828,5.533-12.362,12.361-12.362
		c6.826,0,12.359,5.535,12.359,12.362C27.127,21.594,21.594,27.126,14.768,27.126z"
          />
          <path
            {...props}
            d="M14.385,19.337c-1.338,0-2.289,0.951-2.289,2.34c0,1.336,0.926,2.339,2.289,2.339c1.414,0,2.314-1.003,2.314-2.339
		C16.672,20.288,15.771,19.337,14.385,19.337z"
          />
          <path
            {...props}
            d="M14.742,6.092c-1.824,0-3.34,0.513-4.293,1.053l0.875,2.804c0.668-0.462,1.697-0.772,2.545-0.772
		c1.285,0.027,1.879,0.644,1.879,1.543c0,0.85-0.67,1.697-1.494,2.701c-1.156,1.364-1.594,2.701-1.516,4.012l0.025,0.669h3.42
		v-0.463c-0.025-1.158,0.387-2.162,1.311-3.215c0.979-1.08,2.211-2.366,2.211-4.321C19.705,7.968,18.139,6.092,14.742,6.092z"
          />
        </Fragment>
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "",
  viewBox = "",
  width = "",
  className = "",
  height = ""
}) => (
  <svg
    width={width}
    style={style}
    fill={fill}
    height={height}
    className={className}
    cursor="pointer"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name)}
  </svg>
);

export default SVGIcon;
