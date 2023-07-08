import React from "react";
// import "./Subcard.css";
import { Link } from "react-router-dom";
import { Avatar, Button, Card, Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import "./Subcard.scss";
function Subcard({ subjectName, topicName, url, to, btnName }) {
    return (
        <div className="card-container">
            <Card
                className="subject-card"
                bordered="false"
                hoverable
                type="inner"
            >
                <div className="subcard-div">
                    <div className="subcard-img">
                        <img
                            src="https://shorturl.at/tERWZ"
                            alt={subjectName}
                        />
                    </div>

                    <div className="subcard-about">
                        <div>
                            <div>
                                <Typography.Title
                                    level={4}
                                    className="subcard-about-head"
                                >
                                    {subjectName}
                                </Typography.Title>
                                <Typography.Paragraph>
                                    {" "}
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Ea dolorum soluta delectus
                                </Typography.Paragraph>
                            </div>

                            <div>
                                <Link
                                    type="primary"
                                    to={to}
                                    state={{ subjectName }}
                                    className="card-btn-link"
                                >
                                    <Button
                                        type="primary"
                                        className="reading-btn"
                                    >
                                        {btnName ? btnName : "Start Reading"}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Subcard;
