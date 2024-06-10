import Image from "next/image";
import Link from "next/link";
import error from "/public/images/elements/error.png";

const Error = () => {
  return (
    <div className="error-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-wrapper">
              <div className="error-wrapper__inner">
                <Image src={error} alt="error" />
              </div>
              <div className="error-wrapper__content">
                <h2 className="title">
                  A página não existe!
                </h2>
                <Link
                  href="/"
                  className="cmn-btn d-inline-flex flex-wrap align-items-center active"
                >
                  Voltar ao início <i className="las la-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
