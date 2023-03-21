const SocialNetworks = () => {
  const socialNetworks = [
    // Array of social networks
    {
      name: "facebook",
      url: "https://www.facebook.com/",
      icon: "fab fa-facebook-f",
    },
    {
      name: "twitter",
      url: "https://twitter.com/",
      icon: "fab fa-twitter",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/",
      icon: "fab fa-instagram",
    },
    {
      name: "youtube",
      url: "https://www.youtube.com/",
      icon: "fab fa-youtube",
    },
  ];
  return (
    <div className="social-networks div-50">
      <ul>
        {socialNetworks.map((socialNetwork, index) => {
          return (
            <li key={index}>
              <a href={socialNetwork.url} target="_blank">
                <i className={socialNetwork.icon}></i>{socialNetwork.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialNetworks;
