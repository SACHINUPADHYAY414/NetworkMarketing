import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../../string/Data";
import { postData } from "../../components/api";
import ENDPOINTS from "../../components/api/allEndpoints";

function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setMessage("");

      const response = await postData(ENDPOINTS.NEWSLETTER_SUBSCRIBE, {
        email: email.trim()
      });

      setMessage(response?.message || "You have successfully subscribed!");

      setEmail("");
    } catch (err) {
      console.log(err);

      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!blog) {
    return (
      <section className="blog-not-found min-vh-100 d-flex align-items-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="blog-not-found-card text-center p-4 p-md-5">
                <div className="not-found-icon mx-auto mb-4">
                  <i className="bi bi-journal-x"></i>
                </div>

                <span className="badge rounded-pill text-bg-primary mb-3">
                  404 ERROR
                </span>

                <h2 className="fw-bold mb-3">Blog Not Found</h2>

                <p className="text-secondary mb-4">
                  The blog you are looking for does not exist or may have been
                  removed.
                </p>

                <Link
                  to="/blog"
                  className="btn btn-primary rounded-pill px-4 py-2"
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentIndex = blogs.findIndex((item) => item.id === blog.id);

  const previousBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;

  const nextBlog =
    currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

  const popularPosts = blogs.filter((item) => item.id !== blog.id).slice(0, 3);
  const relatedArticles = blogs
    .filter((item) => item.id !== blog.id && item.category === blog.category)
    .slice(0, 3);

  return (
    <main className="blog-details-page">
      <section className="article-hero position-relative overflow-hidden">
        <div className="container position-relative">
          <nav aria-label="breadcrumb" className="py-4 py-lg-5">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none">
                  Home
                </Link>
              </li>

              <li className="breadcrumb-item">
                <Link to="/blog" className="text-decoration-none">
                  Blog
                </Link>
              </li>

              <li
                className="breadcrumb-item active text-truncate"
                aria-current="page"
              >
                {blog.title}
              </li>
            </ol>
          </nav>

          <div className="row align-items-center g-4 g-lg-5 pb-5">
            <div className="col-12 col-lg-6">
              <div className="article-hero-content text-center text-lg-start">
                <span className="article-category d-inline-flex align-items-center gap-2">
                  <i className="bi bi-stars"></i>
                  {blog.category}
                </span>

                <h2 className="fs-1 fw-bold mt-3 mb-2">{blog.title}</h2>

                <p className="article-description lead mb-4">
                  {blog.shortDescription}
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="author-avatar"
                    />

                    <div className="text-start">
                      <small className="d-block text-secondary">
                        Written by
                      </small>

                      <strong>{blog.author.name}</strong>
                    </div>
                  </div>

                  <span className="meta-divider d-none d-md-block"></span>
                  <span className="small">
                    <i className="bi bi-calendar3 me-2"></i>
                    {blog.date}
                  </span>

                  <span className="meta-divider d-none d-md-block"></span>
                  <span className="small">
                    <i className="bi bi-clock me-2"></i>
                    {blog.readTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="article-hero-image position-relative">
                <img
                  src={blog.heroImage}
                  alt={blog.title}
                  className="img-fluid w-100 h-100 object-fit-cover"
                />

                <div className="hero-image-overlay"></div>

                <div className="hero-image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="article-section py-4 py-md-5">
        <div className="container">
          <div className="row g-4 g-xl-3 align-items-start">
            <div className="col-12 col-lg-8">
              <article className="article-content">
                <div className="content-image-wrapper mb-4">
                  <img
                    src={blog.contentImage}
                    alt={blog.title}
                    className="content-main-image img-fluid w-100"
                  />
                </div>

                <div className="dynamic-blog-content">
                  {blog.content.map((section, index) => {
                    if (section.type === "paragraph") {
                      return (
                        <p key={index} className="mb-2">
                          {section.text}
                        </p>
                      );
                    }
                    if (section.type === "heading") {
                      return (
                        <h2
                          key={index}
                          className="d-flex align-items-center gap-3 fw-bold mt-5 mb-3"
                        >
                          {/* <span className="heading-number flex-shrink-0">
                            {String(index + 1).padStart(2, "0")}
                          </span> */}

                          <span>{section.text}</span>
                        </h2>
                      );
                    }
                    if (section.type === "highlight") {
                      return (
                        <div
                          className="info-box d-flex align-items-start gap-3 p-3 p-md-4 my-4"
                          key={index}
                        >
                          <div className="info-icon flex-shrink-0">
                            <i className="bi bi-check-lg"></i>
                          </div>

                          <span>{section.text}</span>
                        </div>
                      );
                    }

                    // List

                    if (section.type === "list") {
                      return (
                        <ul
                          className="premium-list list-unstyled my-4"
                          key={index}
                        >
                          {section.items.map((item, i) => (
                            <li
                              key={i}
                              className="d-flex align-items-start gap-3 mb-3"
                            >
                              <span className="list-check flex-shrink-0">
                                <i className="bi bi-check2"></i>
                              </span>

                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    return null;
                  })}
                </div>

                <div className="text-center">
                  <div className="continue-reading d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill">
                    <span>Continue Reading</span>

                    <i className="bi bi-arrow-down"></i>
                  </div>
                </div>

                <div className="border-top pt-4 mt-4">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <strong>Tags:</strong>

                    <div className="d-flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="article-tag badge rounded-pill fw-normal"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3 mt-4">
                  <strong>Share this article:</strong>

                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="share-btn"
                      aria-label="Share on Facebook"
                    >
                      <i className="bi bi-facebook"></i>
                    </button>

                    <button
                      type="button"
                      className="share-btn"
                      aria-label="Share on X"
                    >
                      <i className="bi bi-twitter-x"></i>
                    </button>

                    <button
                      type="button"
                      className="share-btn"
                      aria-label="Share on LinkedIn"
                    >
                      <i className="bi bi-linkedin"></i>
                    </button>

                    <button
                      type="button"
                      className="share-btn"
                      aria-label="Share on WhatsApp"
                    >
                      <i className="bi bi-whatsapp"></i>
                    </button>
                  </div>
                </div>

                <div className="row g-3 mt-4">
                  <div className="col-12 col-md-6">
                    {previousBlog ? (
                      <Link
                        to={`/blog/${previousBlog.id}`}
                        className="post-nav-item d-flex align-items-center gap-3 h-100 text-decoration-none p-3 p-md-4"
                      >
                        <div className="nav-arrow flex-shrink-0">
                          <i className="bi bi-arrow-left"></i>
                        </div>

                        <div className="overflow-hidden">
                          <small className="d-block mb-1">Previous Post</small>

                          <strong className="d-block text-truncate">
                            {previousBlog.title}
                          </strong>
                        </div>
                      </Link>
                    ) : (
                      <div className="h-100"></div>
                    )}
                  </div>
                  <div className="col-12 col-md-6">
                    {nextBlog ? (
                      <Link
                        to={`/blog/${nextBlog.id}`}
                        className="post-nav-item next d-flex align-items-center justify-content-md-end gap-3 h-100 text-decoration-none p-3 p-md-4 text-md-end"
                      >
                        <div className="overflow-hidden">
                          <small className="d-block mb-1">Next Post</small>

                          <strong className="d-block text-truncate">
                            {nextBlog.title}
                          </strong>
                        </div>

                        <div className="nav-arrow flex-shrink-0">
                          <i className="bi bi-arrow-right"></i>
                        </div>
                      </Link>
                    ) : (
                      <div className="h-100"></div>
                    )}
                  </div>
                </div>
                {relatedArticles.length > 0 && (
                  <section className="related-articles mt-5 pt-4">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <span className="section-title-line"></span>

                      <h3 className="h4 fw-bold mb-0">Related Articles</h3>
                    </div>

                    <div className="row g-3 g-lg-4">
                      {relatedArticles.map((item) => (
                        <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
                          <Link
                            to={`/blog/${item.id}`}
                            className="related-card d-flex flex-column h-100 text-decoration-none"
                          >
                            <div className="related-image">
                              <img
                                src={item.heroImage}
                                alt={item.title}
                                className="img-fluid w-100 h-100 object-fit-cover"
                              />
                            </div>

                            <div className="related-card-body p-3">
                              <span className="small fw-bold">
                                {item.category}
                              </span>

                              <h4 className="h6 fw-bold mt-2 mb-2">
                                {item.title}
                              </h4>

                              <small>
                                {item.date} • {item.readTime}
                              </small>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </article>
            </div>

            <div className="col-12 col-lg-4">
              <aside className="blog-sidebar">
                <div className="sidebar-card p-3 p-md-4 mb-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="sidebar-icon flex-shrink-0">
                      <i className="bi bi-list-ul"></i>
                    </div>

                    <h3 className="h5 fw-bold mb-0">Table of Contents</h3>
                  </div>

                  <ul className="toc list-unstyled mb-0">
                    {blog.tableOfContents.map((item, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-start gap-2 py-2"
                      >
                        <span className="toc-number flex-shrink-0">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-card p-3 p-md-4 mb-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="sidebar-icon flex-shrink-0">
                      <i className="bi bi-fire"></i>
                    </div>

                    <h3 className="h5 fw-bold mb-0">Popular Posts</h3>
                  </div>

                  <div>
                    {popularPosts.map((item) => (
                      <Link
                        key={item.id}
                        to={`/blog/${item.id}`}
                        className="popular-post d-flex gap-3 py-3 text-decoration-none"
                      >
                        <div className="popular-img flex-shrink-0">
                          <img
                            src={item.heroImage}
                            alt={item.title}
                            className="img-fluid w-100 h-100 object-fit-cover"
                          />
                        </div>

                        <div className="overflow-hidden">
                          <h4 className="small fw-bold mb-1">{item.title}</h4>

                          <small>{item.date}</small>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="newsletter-dark p-4">
                  <div className="newsletter-icon mb-3">
                    <i className="bi bi-send"></i>
                  </div>

                  <h3 className="h4 fw-bold">Stay Updated</h3>

                  <p className="small mb-4">
                    Subscribe to our newsletter and get the latest insights
                    delivered directly to your inbox.
                  </p>

                  <form onSubmit={submitHandler}>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe Now
                          <i className="bi bi-send ms-2"></i>
                        </>
                      )}
                    </button>

                    {message && (
                      <div className="alert alert-success mt-3 mb-0 py-2">
                        {message}
                      </div>
                    )}

                    {error && (
                      <div className="alert alert-danger mt-3 mb-0 py-2">
                        {error}
                      </div>
                    )}
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogDetails;
