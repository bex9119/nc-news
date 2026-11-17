import { useEffect, useState } from "react";
import { getAllTopics } from "../api";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const TopicsBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <>
      {topics.map((topic) => {
        return (
          <Nav.Item key={topic.slug} style={{ marginRight: -15 }}>
            <Nav.Link
              as={NavLink}
              to={"/articles/topics/" + topic.slug}
              style={{ color: "white" }}
            >
              {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </>
  );
};

export default TopicsBar;
