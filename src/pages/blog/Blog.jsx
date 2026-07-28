import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { blogs } from "../../string/Data";
import BlogImage from "../../assets/Blog.png";
import { Button, Card, Col, Row } from "react-bootstrap";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const navigate = useNavigate();
  const categories = [
    "All Categories",
    ...new Set(blogs.map((blog) => blog.category))
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      blog.title.toLowerCase().includes(searchText) ||
      blog.shortDescription.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "All Categories" ||
      blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="services-section py-3 py-md-4">
        <div className="container position-relative">
          <Row className="align-items-center">
            <Col md={8} className="text-center text-md-start">
              <span className="text-white fst-italic">✍️ Blog</span>

              <h1 className="fs-1 fw-bold text-white d-md-none">
                Insights, Ideas &
                <span className="gradient-text d-block">Growth Strategies</span>
              </h1>

              <h1 className="display-5 fw-bold text-white lh-1 d-none d-md-block">
                Insights, Ideas &{" "}
                <span className="gradient-text d-block">Growth Strategies</span>
              </h1>

              <img
                src={BlogImage}
                alt="Blog"
                className="img-fluid d-block d-md-none mx-auto my-4"
                style={{
                  width: "270px",
                  height: "270px",
                  objectFit: "contain"
                }}
              />

              <p className="content-about-description">
                Discover the latest insights, practical ideas, and proven growth
                strategies designed to help your business thrive in the digital
                world. Explore expert tips on digital marketing, SEO, branding,
                content marketing, and online growth to build a stronger and
                more successful brand.
              </p>

              <div className="d-flex flex-column flex-sm-row align-items-center gap-2">
                <btn className="btn btn-primary rounded-pill mt-3">
                  Explore Articles
                  <i className="bi bi-arrow-right ms-2"></i>
                </btn>

                <button className="btn btn-outline-light rounded-pill mt-3">
                  <i className="bi bi-book me-2"></i>
                  Learn. Grow. Succeed.
                </button>
              </div>
            </Col>

            <Col
              md={4}
              className="text-center mt-5 d-none d-md-flex mt-lg-0 d-none d-md-block"
            >
              <img src={BlogImage} alt="Blog" className="img-fluid " />
            </Col>
          </Row>
        </div>
      </section>

      <section className="services-section py-3 py-md-4 ">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-9">
              <h2 className="h5 text-white fw-bold mb-4">Latest Articles</h2>
              <Row className="g-2">
                {filteredBlogs.map((blog, index) => {
                  return (
                    <Col lg={4} md={6} key={index}>
                      <Card
                        className="blog-card p-0 choose-card position-relative h-100 overflow-hidden"
                        onClick={() => navigate(`/blog/${blog.id}`)}
                      >
                        <div className="blog-card-image-wrapper position-relative">
                          <img
                            src={blog.heroImage}
                            alt={blog.title}
                            className="blog-card-image"
                          />

                          <span className="blog-category position-absolute top-0 end-0 m-3">
                            {blog.category}
                          </span>
                        </div>

                        <div className="d-flex flex-column h-100 p-3">
                          <div className="flex-grow-1">
                            <h5 className="text-warning blogCard-title-fixed">
                              {blog.title}
                            </h5>

                            <p className="mb-0">{blog.shortDescription}</p>
                          </div>
                          <div className="d-flex justify-content-between text-secondary small my-3">
                            <span>
                              <i className="bi bi-calendar3 me-1"></i>
                              {blog.date}
                            </span>

                            <span>
                              <i className="bi bi-clock me-1"></i>
                              {blog.readTime}
                            </span>
                          </div>

                          <Link
                            to={`/blog/${blog.id}`}
                            className="text-primary text-decoration-none small fw-semibold"
                          >
                            Read More
                            <i className="bi bi-arrow-right ms-1"></i>
                          </Link>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>

            <div className="col-lg-3">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search blogs..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <button className="btn btn-outline-secondary">
                  <i className="bi bi-search"></i>
                </button>
              </div>

              <div className="card border shadow-sm mb-3">
                <div className="card-body">
                  <h3 className="h6 fw-bold mb-3">Categories</h3>

                  <div className="list-group list-group-flush">
                    {categories.map((category) => {
                      const count =
                        category === "All Categories"
                          ? blogs.length
                          : blogs.filter((blog) => blog.category === category)
                              .length;

                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center px-0 ${
                            selectedCategory === category
                              ? "text-primary fw-semibold"
                              : ""
                          }`}
                        >
                          {category}

                          <span className="badge bg-light text-secondary">
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="card border shadow-sm mb-3">
                <div className="card-body">
                  <h3 className="h6 fw-bold mb-3">Popular Posts</h3>

                  {blogs.slice(0, 3).map((blog) => (
                    <Link
                      key={blog.id}
                      to={`/blog/${blog.id}`}
                      className="d-flex gap-2 text-decoration-none mb-3"
                    >
                      <img
                        src={blog.heroImage}
                        width="60"
                        height="50"
                        className="rounded object-fit-cover"
                        alt={blog.title}
                      />

                      <div>
                        <h4 className="small fw-semibold text-dark mb-1">
                          {blog.title}
                        </h4>

                        <small className="text-secondary">{blog.date}</small>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="card border shadow-sm">
                <div className="card-body">
                  <h3 className="h6 fw-bold">Stay Updated</h3>

                  <p className="small text-secondary">
                    Subscribe to our newsletter and get the latest insights
                    delivered to your inbox.
                  </p>

                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Enter your email"
                  />

                  <button className="btn btn-primary w-100">
                    Subscribe Now
                    <i className="bi bi-send ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
