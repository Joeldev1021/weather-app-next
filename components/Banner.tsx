import React from "react";
import styles from "../styles/banner.module.css";

interface Props {
    temperature: number;
}

const Banner = ({temperature}:Props) => {

  return (
    <div className={styles.banner}>
      <img src="https://s3-alpha-sig.figma.com/img/f823/173c/6d67db3d534c1d812e09aed0501cdb6e?Expires=1645401600&Signature=hIJeEblaytdsVhXn8wq-QevswQ~IAi-LJGayVm7HPJg76nOTQMzacBLQGjfEvH0bdkf1uq~8s3WwPo8tkHgHuRxLztz1SC1wo-rPRV0VR7HsowOF9JFSGvIjWmT7F1GugicCXAcnFilvbVp~IzBHx3wyfj6tKEcH8j4t1NB4VjBZOJVBTVgkasUKQ~VOkWbD7Gfcfa19lqeqDzJFLo~JbnPCydgdtiZbffUx5rZQsqEMUpbxKfhSGqdDrawP8uJNLjy0XjQGYEHsHMTJt5t8rInDPI8oyjRGbOjdCD77kfeQdIAUMwJdDbydqvnHVKOu0JzORLpNJAq5MLz72GU8~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="weather" /> <img src="https://s3-alpha-sig.figma.com/img/905f/e98a/3a30d42f1ad20115bbf8830bf40ab11b?Expires=1645401600&Signature=dpUXfdtEkkUzMZkTHatkPZ92p1VgSZsovdj9Z~xSfmBHL1ihul0hLkODNSRnOqRBIdzWMHVfHfgtWpBze56zbKNLgA7vcQTCSMLCaYzlcJUn8KlsbRM~4XQ4IGEOKA1~IxkzgfVVHKNt0C2HmT4DeGXes69xAikOkfGFR50r0mtX3F1oYU5d~NcCBDabMF7p8vkeMzWeiUzOyIwr2qT4jDmwpsbHXFBpJQTlW01HaiB5MLNgc9ZFM~N8HA8uINNELg4~WStoD3KR00O9r1yTbBOFq1KQ~nwrV0O~BBUkjrVsuOcMsJ7Fz993w6kb6IkKdDmlJagMstxCaY~85PZvtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="weather" />
      <img src="https://s3-alpha-sig.figma.com/img/905f/e98a/3a30d42f1ad20115bbf8830bf40ab11b?Expires=1645401600&Signature=dpUXfdtEkkUzMZkTHatkPZ92p1VgSZsovdj9Z~xSfmBHL1ihul0hLkODNSRnOqRBIdzWMHVfHfgtWpBze56zbKNLgA7vcQTCSMLCaYzlcJUn8KlsbRM~4XQ4IGEOKA1~IxkzgfVVHKNt0C2HmT4DeGXes69xAikOkfGFR50r0mtX3F1oYU5d~NcCBDabMF7p8vkeMzWeiUzOyIwr2qT4jDmwpsbHXFBpJQTlW01HaiB5MLNgc9ZFM~N8HA8uINNELg4~WStoD3KR00O9r1yTbBOFq1KQ~nwrV0O~BBUkjrVsuOcMsJ7Fz993w6kb6IkKdDmlJagMstxCaY~85PZvtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
      <img src="https://s3-alpha-sig.figma.com/img/905f/e98a/3a30d42f1ad20115bbf8830bf40ab11b?Expires=1645401600&Signature=dpUXfdtEkkUzMZkTHatkPZ92p1VgSZsovdj9Z~xSfmBHL1ihul0hLkODNSRnOqRBIdzWMHVfHfgtWpBze56zbKNLgA7vcQTCSMLCaYzlcJUn8KlsbRM~4XQ4IGEOKA1~IxkzgfVVHKNt0C2HmT4DeGXes69xAikOkfGFR50r0mtX3F1oYU5d~NcCBDabMF7p8vkeMzWeiUzOyIwr2qT4jDmwpsbHXFBpJQTlW01HaiB5MLNgc9ZFM~N8HA8uINNELg4~WStoD3KR00O9r1yTbBOFq1KQ~nwrV0O~BBUkjrVsuOcMsJ7Fz993w6kb6IkKdDmlJagMstxCaY~85PZvtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
      <img src="https://s3-alpha-sig.figma.com/img/905f/e98a/3a30d42f1ad20115bbf8830bf40ab11b?Expires=1645401600&Signature=dpUXfdtEkkUzMZkTHatkPZ92p1VgSZsovdj9Z~xSfmBHL1ihul0hLkODNSRnOqRBIdzWMHVfHfgtWpBze56zbKNLgA7vcQTCSMLCaYzlcJUn8KlsbRM~4XQ4IGEOKA1~IxkzgfVVHKNt0C2HmT4DeGXes69xAikOkfGFR50r0mtX3F1oYU5d~NcCBDabMF7p8vkeMzWeiUzOyIwr2qT4jDmwpsbHXFBpJQTlW01HaiB5MLNgc9ZFM~N8HA8uINNELg4~WStoD3KR00O9r1yTbBOFq1KQ~nwrV0O~BBUkjrVsuOcMsJ7Fz993w6kb6IkKdDmlJagMstxCaY~85PZvtA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
       <span className={styles.temp}>{Math.round(temperature)}C</span>
    </div>
  );
};

export default Banner;
