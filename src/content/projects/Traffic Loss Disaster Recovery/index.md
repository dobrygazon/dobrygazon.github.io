--- 

title: "Traffic Loss Disaster Recovery"
description: "Engineering Through an SEO Catastrophe"
date: "May 17 2025"
thumbnail: "/lighthouse.png"

---

What happens when your tech upgrade kills **52%** of your organic traffic overnight?

[Gatsby migration](/projects/Site-Architecture-Overhaul) was supposed to improve performance and developer experience. Instead, it triggered an 18-month recovery project that taught me more about technical product management than any successful launch ever could.

## When Modern Tech Meets SEO Reality

We migrated from Joomla to Gatsby + Netlify with confidence. The new stack offered significantly improved website loading performance, simplified code maintenance, and a more modern, responsive user interface. But within three weeks, reality hit hard.

Traffic dropped double digits. Google Search Console revealed the damage: **70% of our URLs had vanished from the index**. Lead volume cratered as our most valuable pages disappeared from search results.

The **root causes** were systematic. Massive 301 redirect maps confused Google's crawlers. Our entirely new HTML structure forced Google to relearn everything about our content. Critical pages disappeared from sitemaps during the transition. Early Gatsby templates lacked the structured internal linking that guided crawlers through our site architecture.

We prioritized developer experience, but along the way, made critical missteps that impacted our search visibility—resulting in Google needing to reindex over 7,000 pages with entirely new signals.

## Building a Custom Reindexing System

Google's manual "Request Indexing" tool worked, but clicking through 7,000 URLs individually wasn't feasible. We needed automation.

Together with a web developer from my team, we built a custom system using **Google’s Indexing API**—originally designed for job postings and live events, but effective for regular content when implemented correctly.

The system operated in **three stages**. 

1. I ranked the pages that were missing from the index using sitemap data, historical traffic, conversion potential, and internal link counts—ensuring the most valuable content was prioritized for reindexing first.
2. Our script processed URLs in batches, submitting them via the Indexing API with careful rate limiting to avoid quota violations. We added retry logic for failed requests and logging to track submission status.
3. I monitored reindexing progress through site: queries and Search Console coverage reports. This feedback loop helped me identify patterns in which pages Google prioritized for recrawling.


## What This Taught Me About Technical Product Management

Four principles emerged from this recovery that shaped how I approach technical challenges.

1. Systems beat campaigns. A script running daily accomplished more than any one-time SEO audit or manual fix. Automation scales; manual processes don't.
2. **Crawl activity is key**. Google's daily crawled URLs jumped from under 100 to over 2,500—a **25x increase** that indicated restored trust in our site architecture.
3. **Treat infrastructure as a product constraint**. Crawl budget became our primary resource, just like API rate limits or database connections. Understanding Google's crawling behavior helped us optimize for the constraint that actually mattered.
4. **Accept short-term pain for long-term compounding**. The new Gatsby stack was objectively better—faster builds, better developer experience, modern tooling. It just needed systematic nurturing back to visibility.

## The Foundation That Scaled

I didn't just recover our traffic. I built system that made future growth more predictable and sustainable.

The **reindexing tool became part of our deployment pipeline**, automatically submitting new pages to Google. Our internal linking system ensured new content integrated properly with existing site architecture. 

Most importantly, we proved that systematic thinking and custom tooling can solve problems that manual processes can't scale to handle. **Technical migrations will always carry risk**, but proper recovery systems turn temporary setbacks into stronger foundations.

Even the best technology upgrade can crater your business metrics if you don't plan for the transition. But if you build the right systems—for crawling, linking, and monitoring—you can recover stronger than before.