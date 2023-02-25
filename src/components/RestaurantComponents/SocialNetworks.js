const SocialNetworks = () => {
  const socialNetworks = [
    // Array of social networks
    {
      url: "https://www.facebook.com/",
      icon: "fab fa-facebook-f",
    },
    {
      url: "https://twitter.com/",
      icon: "fab fa-twitter",
    },
    {
      url: "https://www.instagram.com/",
      icon: "fab fa-instagram",
    },
    {
      url: "https://www.youtube.com/",
      icon: "fab fa-youtube",
    },
  ];
  return (
    <div className="social-networks">
      <ul>
        {socialNetworks.map((socialNetwork, index) => {
          return (
            <li key={index}>
              <a href={socialNetwork.url} target="_blank">
                <i className={socialNetwork.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialNetworks;
