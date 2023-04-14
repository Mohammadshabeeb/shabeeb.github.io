import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../Ui/Card";
const Values = () => {
  return (
    <div>
      <section className="Values">
        <div className="container values_container">
          <div className="values_left">
            <img src={Image} alt="value img" />
          </div>
          <div className="values_right">
            <SectionHead icon={<GiCutDiamond/>} title="value"></SectionHead>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos ipsum pariatur optio libero ullam, quaerat quas
              necessitatibus culpa magnam incidunt, quibusdam dolores rerum sit,
              dolorum molestias aliquam aut dolor ratione?
            </p>
            <div className="values_wrapper">
              {values.map(({  id, icon, title, desc  }) => (
            <Card key={id} className="values_value">
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{desc}</small>
            </Card>
          ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;
