const InstagramIcon = ({ className, strokeWidth }) => {
  return (
    <div>
      <svg
        width="19"
        height="20"
        viewBox="0 0 18 19"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 0.888672H5C2.23858 0.888672 0 3.12725 0 5.88867V13.8887C0 16.6501 2.23858 18.8887 5 18.8887H13C15.7614 18.8887 18 16.6501 18 13.8887V5.88867C18 3.12725 15.7614 0.888672 13 0.888672ZM16.25 13.8887C16.2445 15.6813 14.7926 17.1332 13 17.1387H5C3.20735 17.1332 1.75549 15.6813 1.75 13.8887V5.88867C1.75549 4.09602 3.20735 2.64416 5 2.63867H13C14.7926 2.64416 16.2445 4.09602 16.25 5.88867V13.8887ZM13.75 6.13867C14.3023 6.13867 14.75 5.69095 14.75 5.13867C14.75 4.58639 14.3023 4.13867 13.75 4.13867C13.1977 4.13867 12.75 4.58639 12.75 5.13867C12.75 5.69095 13.1977 6.13867 13.75 6.13867ZM9 5.38867C6.51472 5.38867 4.5 7.40339 4.5 9.88867C4.5 12.374 6.51472 14.3887 9 14.3887C11.4853 14.3887 13.5 12.374 13.5 9.88867C13.5027 8.69437 13.0294 7.54824 12.1849 6.70375C11.3404 5.85926 10.1943 5.38601 9 5.38867ZM6.25 9.88867C6.25 11.4075 7.4812 12.6387 9 12.6387C10.5188 12.6387 11.75 11.4075 11.75 9.88867C11.75 8.36987 10.5188 7.13867 9 7.13867C7.4812 7.13867 6.25 8.36987 6.25 9.88867Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

export { InstagramIcon };

const YoutubeIcon = ({ className, strokeWidth }) => {
  return (
    <div>
      <svg
        xmlns="https://www.w3.org/2000/svg"
        width="22"
        height="15.568"
        viewBox="0 0 22 15.568"
        className={className}
      >
        <path
          d="M17.431,67.393H4.569A4.569,4.569,0,0,0,0,71.962v6.43a4.569,4.569,0,0,0,4.569,4.569H17.431A4.569,4.569,0,0,0,22,78.392v-6.43A4.569,4.569,0,0,0,17.431,67.393Zm-3.09,8.1L8.325,78.359a.241.241,0,0,1-.345-.218V72.223a.242.242,0,0,1,.351-.215l6.016,3.049A.242.242,0,0,1,14.341,75.49Z"
          transform="translate(0 -67.393)"
          fill="currentColor"
          strokeWidth={strokeWidth}
        ></path>
      </svg>
    </div>
  );
};

export { YoutubeIcon };

/* const XIcon = () => {
  return (
    <div>
        <svg
  className="h-5 w-auto fill-current text-textSecondary hover:text-textPrimary hover:scale-110"
  xmlns="http://www.w3.org/2000/svg"  
  viewBox="0 0 46 48" 
  width="500px" 
  height="500px">
    <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"/>
  </svg>
     
    </div>
  )
}

export { XIcon } */

const LinkedinIcon = ({ className, strokeWidth }) => {
  return (
    <div className="scale-[1.30]">
      <svg
        xmlns="https://www.w3.org/2000/svg"
        width="21"
        height="16"
        viewBox="0 0 21 16"
        className={className}
      >
        <path
          d="M0,9.4H3.027V0H0Z"
          transform="translate(0.392 4.438)"
          fill="currentColor"
          strokeWidth={strokeWidth}
        ></path>
        <path
          d="M6.423,0A3.121,3.121,0,0,0,3.4,1.566V.09H0c.044.783,0,9.4,0,9.4H3.4V4.4a2.1,2.1,0,0,1,.074-.768,1.729,1.729,0,0,1,1.64-1.152c1.181,0,1.718.87,1.718,2.143V9.493h3.433V4.265C10.266,1.352,8.575,0,6.423,0"
          transform="translate(5.268 4.348)"
          fill="currentColor"
          strokeWidth={strokeWidth}
        ></path>
        <path
          d="M0,0H3.675V3.263H0Z"
          transform="translate(0 0)"
          fill="none"
          strokeWidth={strokeWidth}
        ></path>
        <path
          d="M1.85,0A1.678,1.678,0,0,0,0,1.633a1.66,1.66,0,0,0,1.806,1.63h.022A1.674,1.674,0,0,0,3.675,1.63,1.667,1.667,0,0,0,1.85,0"
          transform="translate(0)"
          fill="currentColor"
          strokeWidth={strokeWidth}
        ></path>
        <path
          d="M0,0H10.265V9.493H0Z"
          transform="translate(0 0)"
          fill="none"
          strokeWidth={strokeWidth}
        ></path>
      </svg>
    </div>
  );
};

export { LinkedinIcon };
