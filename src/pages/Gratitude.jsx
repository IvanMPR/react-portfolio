import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useCountdown } from "react-countdown-circle-timer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// import Header from "../components/header/Header";
import { useEffect } from "react";

function Gratitude() {
  const navigate = useNavigate();
  const { remainingTime } = useCountdown({
    isPlaying: true,
    duration: 4,
    colors: "var(--color-primary)",
  });

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, remainingTime * 1000);
  }, [navigate, remainingTime]);

  return (
    <>
      <div className="thanks">
        <h2 className="thanks__h2">Thank you !</h2>
        <div className="thanks__icon">
          <FontAwesomeIcon
            icon={faThumbsUp}
            size="4x"
            className="gratitude-thumb"
            color={`var(--color-primary)`}
          />
        </div>
        <p className="thanks__p">Your form has been submitted</p>
        <div className="thanks__timer">
          <CountdownCircleTimer
            isPlaying
            duration={4}
            colors="var(--color-primary)"
            onComplete={() => ({ shouldRepeat: false })}
          >
            {({ remainingTime }) => (
              <div className="timer">
                <div className="text">Redirecting in</div>
                <div className="value">
                  <p>{remainingTime}</p>
                </div>
                <div className="text">seconds</div>
              </div>
            )}
          </CountdownCircleTimer>
        </div>
      </div>
    </>
  );
}

export default Gratitude;
// q: why does this component not accepting body data theme properly ?
