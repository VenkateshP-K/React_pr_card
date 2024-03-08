import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

Card.propTypes = {
  item: {},
};

function Card({ item }) {
  return (
    <div className="col">
    <div className="card mb-4 rounded-3 shadow-sm" >
    <div className="card-body">
        <h6>{item.smtitle}</h6>
      <h5 className="card-title">{item.title}</h5>
      <ul className="list-unstyled mt-3 mb-4">
      {item.features.map((feature, index) => {
              return (
                <li key={index}>
                  {feature.enabled ? (
                    <span>
                      <TiTick />
                      {feature.val}
                    </span>
                  ) : (
                    <>
                      <ImCross size={8} />
                      {feature.val}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
      <a href="#" className="btn btn-primary">Subscribe</a>
    </div>
  </div>
  </div>
  )
}

export default Card;