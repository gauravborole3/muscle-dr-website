import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function BlogPost() {
  const { id } = useParams();
  // const blogPost = blogPostsDatabase[Number(id)] || blogPostsDatabase[1];

  // Blog posts database
  const blogPostsDatabase = {
    1: {
      id: 1,
      title: 'Understanding Lower Back Pain: Causes, Treatment, and Prevention',
      category: 'Pain Management',
      date: '2024-01-20',
      author: 'Dr. Nidhish Ingle (PT)',
      readTime: '8 min read',
      image: '📚',
      excerpt: 'Lower back pain affects millions of people worldwide. Learn about the most common causes of back pain and how physiotherapy can help you find relief and prevent future issues.',
      content: [
      {
        type: 'paragraph',
        text: 'Lower back pain is one of the most common health complaints affecting people across all age groups and professions. Whether you\'re an office worker, athlete, or manual laborer, chances are you\'ve experienced or will experience lower back pain at some point in your life. Understanding the causes, symptoms, and treatment options is the first step toward effective pain management and long-term relief.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'What Causes Lower Back Pain?'
      },
      {
        type: 'paragraph',
        text: 'Lower back pain can result from various causes, ranging from simple muscle strains to more complex structural issues. The lumbar spine is responsible for supporting most of your body\'s weight and facilitating movement, making it particularly susceptible to injury and strain.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Common Causes Include:'
      },
      {
        type: 'list',
        items: [
          'Muscle Strains: Sudden movements, lifting heavy objects incorrectly, or overuse of back muscles can lead to acute strains.',
          'Poor Posture: Prolonged sitting with incorrect posture gradually weakens back muscles and strains the spine.',
          'Herniated Discs: When the soft material inside a spinal disc protrudes, it can compress nerves and cause pain.',
          'Degenerative Disc Disease: Age-related wear and tear of spinal discs can lead to chronic pain.',
          'Sciatica: Compression of the sciatic nerve causes sharp, shooting pain down one leg.',
          'Spinal Stenosis: Narrowing of the spinal canal compresses nerves and causes pain.',
          'Muscle Imbalances: Weak abdominal muscles and tight hip flexors contribute to lower back stress.',
          'Sedentary Lifestyle: Lack of physical activity weakens core muscles that support the spine.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Many people experience lower back pain from a combination of factors. For instance, poor posture combined with weak core muscles and occasional overstrain creates the perfect environment for chronic pain development.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'When to Seek Physiotherapy'
      },
      {
        type: 'paragraph',
        text: 'You should consider seeing a physiotherapist if you experience:'
      },
      {
        type: 'list',
        items: [
          'Pain lasting more than 2-3 weeks',
          'Pain that interferes with daily activities',
          'Pain radiating into your legs',
          'Numbness or tingling sensations',
          'Pain that doesn\'t improve with rest',
          'Pain following an injury or accident',
          'Recurring pain episodes'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'How Physiotherapy Helps Lower Back Pain'
      },
      {
        type: 'paragraph',
        text: 'Physiotherapy takes a comprehensive approach to treating lower back pain by addressing the root causes rather than just symptoms. Our physiotherapists use evidence-based techniques to reduce pain, restore function, and prevent recurrence.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Treatment Approaches:'
      },
      {
        type: 'subSection',
        title: 'Manual Therapy',
        content: 'Hands-on techniques such as spinal mobilization, soft tissue release, and massage help reduce muscle tension, improve mobility, and alleviate pain.'
      },
      {
        type: 'subSection',
        title: 'Therapeutic Exercises',
        content: 'Targeted exercises strengthen weak muscles, improve flexibility, and restore proper movement patterns. A personalized exercise program addresses your specific deficits.'
      },
      {
        type: 'subSection',
        title: 'Postural Education',
        content: 'Learning proper posture during daily activities, work, and exercise prevents future pain and promotes long-term spinal health.'
      },
      {
        type: 'subSection',
        title: 'Core Stabilization',
        content: 'A strong core protects your spine and reduces stress on lower back structures. Progressive core exercises are essential for pain relief.'
      },
      {
        type: 'subSection',
        title: 'Movement Re-education',
        content: 'We teach you how to move correctly during daily tasks like lifting, bending, and sitting to prevent injury.'
      },
      {
        type: 'paragraph',
        text: 'Research consistently shows that physiotherapy is highly effective for lower back pain. Most patients experience significant improvement within 4-6 weeks of consistent treatment and exercise.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Top 5 Exercises for Lower Back Pain Relief'
      },
      {
        type: 'paragraph',
        text: 'These exercises can help relieve lower back pain. However, always consult with a physiotherapist before starting any new exercise program, especially if you\'re experiencing acute pain.'
      },
      {
        type: 'exerciseList',
        exercises: [
          {
            name: 'Pelvic Tilts',
            description: 'Lie on your back with knees bent. Gently tilt your pelvis to flatten your lower back against the floor. Hold for 5 seconds and repeat 10 times. This exercise strengthens your core and relieves tension.'
          },
          {
            name: 'Bird Dogs',
            description: 'Start on hands and knees. Extend your right arm forward and left leg backward simultaneously. Hold for 2 seconds and return. Alternate sides, doing 10 reps per side. Excellent for core stability and balance.'
          },
          {
            name: 'Cat-Cow Stretch',
            description: 'On hands and knees, alternate between arching your back (cow) and rounding it (cat). Perform 10-15 slow repetitions. This mobilizes your spine and reduces stiffness.'
          },
          {
            name: 'Bridges',
            description: 'Lie on your back with knees bent and feet flat. Lift your hips off the ground, squeezing your glutes. Hold for 3-5 seconds and lower. Do 12-15 repetitions. Strengthens glutes and lower back.'
          },
          {
            name: 'Child\'s Pose',
            description: 'Kneel on the floor and lower your torso toward your thighs, extending your arms forward. Hold for 30 seconds to 1 minute. This gentle stretch relieves tension and promotes relaxation.'
          }
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'Prevention: The Best Medicine'
      },
      {
        type: 'paragraph',
        text: 'Preventing lower back pain is far more effective than treating it. Here are evidence-based strategies to prevent future episodes:'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Prevention Strategies:'
      },
      {
        type: 'list',
        items: [
          'Maintain Good Posture: Be mindful of your posture throughout the day, especially when sitting at a desk.',
          'Stay Active: Regular physical activity strengthens muscles and maintains spinal health.',
          'Strengthen Your Core: A strong core is your spine\'s best protection against injury.',
          'Lift Correctly: Bend your knees, keep your back straight, and hold objects close to your body when lifting.',
          'Take Regular Breaks: If you sit for long periods, stand, stretch, and move around every 30 minutes.',
          'Manage Stress: Stress causes muscle tension. Practice relaxation techniques like yoga or meditation.',
          'Sleep on Your Back or Side: Avoid sleeping on your stomach, which strains your neck and lower back.',
          'Maintain a Healthy Weight: Extra weight puts additional stress on your lower back.',
          'Stay Hydrated: Proper hydration keeps spinal discs hydrated and healthy.',
          'Avoid Smoking: Smoking reduces blood flow and impairs healing.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: 'What to Expect at Your First Appointment'
      },
      {
        type: 'paragraph',
        text: 'When you visit The Muscle Dr for lower back pain, here\'s what you can expect:'
      },
      {
        type: 'paragraph',
        text: 'During your initial consultation, our physiotherapists will conduct a thorough assessment to understand your pain, medical history, and functional limitations. This includes range of motion tests, strength assessments, and orthopedic special tests. Based on these findings, we\'ll develop a personalized treatment plan tailored to your specific needs and goals.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Recovery Timeline'
      },
      {
        type: 'paragraph',
        text: 'Recovery time depends on the severity of your condition and your commitment to rehabilitation:'
      },
      {
        type: 'list',
        items: [
          'Acute Muscle Strains: 2-4 weeks with physiotherapy',
          'Moderate Strains: 4-8 weeks of treatment',
          'Chronic Pain: 8-12 weeks or longer, depending on underlying causes',
          'Post-Surgical Recovery: 6-12 weeks following specific guidelines'
        ]
      },
      {
        type: 'paragraph',
        text: 'Most patients see significant improvement within the first 4-6 weeks of consistent physiotherapy treatment and home exercise compliance.'
      },
      {
        type: 'heading',
        level: 2,
        text: 'Key Takeaways'
      },
      {
        type: 'list',
        items: [
          'Lower back pain is common but treatable with proper physiotherapy.',
          'Understanding the cause of your pain is essential for effective treatment.',
          'Physiotherapy addresses root causes rather than just masking symptoms.',
          'A combination of manual therapy, exercises, and lifestyle changes produces the best results.',
          'Prevention through posture, exercise, and proper body mechanics is crucial.',
          'Most patients recover well with consistent treatment and home exercise compliance.',
          'Early intervention prevents chronic pain development.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Don\'t let lower back pain limit your quality of life. With proper physiotherapy and a commitment to rehabilitation, you can achieve lasting pain relief and prevent future episodes. Our experienced physiotherapists at The Muscle Dr are ready to help you on your journey to a pain-free life.'
      }
    ]
    },
    2: {
      id: 2,
      title: 'The Benefits of Sports Physiotherapy for Athletes',
      category: 'Sports & Recovery',
      date: '2024-01-18',
      author: 'Dr. Nidhish Ingle (PT)',
      readTime: '6 min read',
      excerpt: 'Whether you\'re a professional athlete or a weekend warrior, sports physiotherapy can improve performance and prevent injuries.',
      content: [
        {
          type: 'paragraph',
          text: 'Sports physiotherapy is a specialized branch of physiotherapy focused on treating and preventing sports-related injuries. Whether you\'re a competitive athlete, weekend warrior, or fitness enthusiast, sports PT can help you perform at your best while minimizing injury risk.'
        },
        {
          type: 'heading',
          level: 2,
          text: 'What is Sports Physiotherapy?'
        },
        {
          type: 'paragraph',
          text: 'Sports physiotherapy combines principles of anatomy, physiology, and biomechanics to assess, treat, and prevent injuries related to sports and exercise. Sports physiotherapists work with athletes to optimize performance, accelerate recovery, and develop prevention strategies.'
        },
        {
          type: 'heading',
          level: 2,
          text: 'Key Benefits of Sports Physiotherapy'
        },
        {
          type: 'list',
          items: [
            'Injury Prevention: Specialized assessment and conditioning prevent common sports injuries',
            'Faster Recovery: Evidence-based rehabilitation gets you back to sport quickly',
            'Performance Enhancement: Biomechanical optimization improves athletic performance',
            'Pain Management: Effective treatment of sports injuries without rest-dependent recovery',
            'Movement Screening: Identify movement dysfunction before it causes injury',
            'Sport-Specific Training: Rehabilitation tailored to your sport\'s demands'
          ]
        },
        {
          type: 'paragraph',
          text: 'Many elite athletes work with sports physiotherapists as part of their training program. The proactive approach helps identify weaknesses and imbalances before they become major injuries.'
        },
        {
          type: 'heading',
          level: 2,
          text: 'Common Sports Injuries We Treat'
        },
        {
          type: 'list',
          items: [
            'Anterior Cruciate Ligament (ACL) Injuries: Comprehensive rehabilitation post-surgery or conservative management',
            'Rotator Cuff Injuries: Targeted exercises for shoulder stability',
            'Hamstring Strains: Safe progression back to sport-specific activities',
            'Ankle Sprains: Proprioceptive training and functional rehabilitation',
            'Patellar Tendinitis: Load management and strengthening protocols',
            'Tennis Elbow (Lateral Epicondylitis): Eccentric loading and activity modification'
          ]
        },
        {
          type: 'paragraph',
          text: 'Early intervention in sports injuries is crucial for optimal outcomes. The longer you wait, the more compensation patterns develop, leading to secondary injuries.'
        }
      ]
    },
    3: {
      id: 3,
      title: 'Ergonomics at Work: Preventing Repetitive Strain Injuries',
      category: 'Workplace Health',
      date: '2024-01-16',
      author: 'Dr. Nidhish Ingle (PT)',
      readTime: '7 min read',
      excerpt: 'Spending hours at a desk? Learn how proper ergonomics can prevent repetitive strain injuries.',
      content: [
        {
          type: 'paragraph',
          text: 'With more people working at desks and using computers, repetitive strain injuries (RSI) have become increasingly common. Conditions like carpal tunnel syndrome, tennis elbow, and neck pain often develop from poor workplace ergonomics.'
        },
        {
          type: 'heading',
          level: 2,
          text: 'Understanding Repetitive Strain Injuries'
        },
        {
          type: 'paragraph',
          text: 'Repetitive strain injuries develop over time from repetitive motions, sustained positions, or excessive force. Unlike acute injuries from a single incident, RSIs develop gradually and often go unnoticed until symptoms appear.'
        },
        {
          type: 'heading',
          level: 2,
          text: 'Proper Workstation Setup'
        },
        {
          type: 'list',
          items: [
            'Monitor Height: Position screen at eye level, about an arm\'s length away',
            'Chair Height: Feet flat on floor, knees at 90 degrees, hips slightly higher than knees',
            'Keyboard and Mouse: Keep wrists neutral, elbows at 90 degrees, close to your body',
            'Desk Height: Elbows should rest at 90 degrees when hands are on keyboard',
            'Document Holder: Use for frequently referenced documents to reduce neck strain',
            'Lighting: Adequate lighting without glare reduces eye strain and neck tension'
          ]
        },
        {
          type: 'heading',
          level: 2,
          text: 'Preventive Exercises and Stretches'
        },
        {
          type: 'paragraph',
          text: 'Taking regular breaks and performing simple exercises can significantly reduce RSI risk. These should be done multiple times throughout your workday.'
        }
      ]
    }
  };

  // Get the blog post based on ID, default to post 1 if not found
  const blogPost = blogPostsDatabase[id] || blogPostsDatabase[1];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Render content based on type
  const renderContent = (item, index) => {
    switch (item.type) {
      case 'paragraph':
        return (
          <motion.p key={index} className="blog-post-paragraph" variants={itemVariants}>
            {item.text}
          </motion.p>
        );
      case 'heading':
        const HeadingTag = `h${item.level}`;
        return (
          <motion.div key={index} variants={itemVariants}>
            <HeadingTag className={`blog-post-h${item.level}`}>
              {item.text}
            </HeadingTag>
          </motion.div>
        );
      case 'list':
        return (
          <motion.ul key={index} className="blog-post-list" variants={itemVariants}>
            {item.items.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </motion.ul>
        );
      case 'subSection':
        return (
          <motion.div key={index} className="blog-post-sub-section" variants={itemVariants}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </motion.div>
        );
      case 'exerciseList':
        return (
          <motion.div key={index} className="exercises-container" variants={itemVariants}>
            {item.exercises.map((exercise, i) => (
              <motion.div key={i} className="exercise-card" variants={itemVariants}>
                <h4>{i + 1}. {exercise.name}</h4>
                <p>{exercise.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );
      // default:
      //   return null;
    }
  };

  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Blog Post Header */}
      <motion.section 
        className="blog-post-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="blog-post-header-content">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1>{blogPost.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-category">{blogPost.category}</span>
              <span className="blog-post-date">
                {new Date(blogPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="blog-post-read-time">{blogPost.readTime}</span>
            </div>
            <p className="blog-post-excerpt">{blogPost.excerpt}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Post Content */}
      <motion.section 
  className="blog-post-content-section"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
        <div className="blog-post-container">
          {/* Sidebar */}
          <aside className="blog-post-sidebar">
            <motion.div 
              className="blog-author-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="author-avatar">👨‍⚕️</div>
              <h3>About the Author</h3>
              <p className="author-name">{blogPost.author}</p>
              <p className="author-bio">
                Dr. Nidhish Ingle (PT) is a licensed physiotherapist with 3+ years of experience helping patients recover from injuries and manage chronic pain through evidence-based treatment.
              </p>
              <Link to="/contact" className="btn btn-primary btn-small">
                Book Consultation
              </Link>
            </motion.div>

            <motion.div 
              className="blog-cta-card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Need Expert Help?</h3>
              <p>Get personalized physiotherapy treatment for your lower back pain.</p>
              <Link to="/contact" className="btn btn-primary">
                Schedule Now
              </Link>
            </motion.div>
          </aside>

          {/* Main Content */}
          <motion.div 
            className="blog-post-main"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPost.content.map((item, index) => renderContent(item, index))}
          </motion.div>
        </div>
      </motion.section>

      {/* Related Posts Section */}
     {/* <motion.section 
        className="related-posts-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Related Articles
          </motion.h2>

          <motion.div 
            className="related-posts-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Sciatica Pain Relief: Complete Treatment Guide',
                category: 'Pain Management',
                excerpt: 'Learn how to manage sciatica pain with evidence-based physiotherapy techniques.'
              },
              {
                title: 'Core Strengthening Exercises for Spinal Health',
                category: 'Prevention',
                excerpt: 'Discover essential exercises to build a strong core and prevent back injuries.'
              },
              {
                title: 'Ergonomics at Work: Preventing Workplace Back Pain',
                category: 'Workplace Health',
                excerpt: 'Set up your workspace correctly to avoid chronic back pain and injury.'
              }
            ].map((post, index) => (
              <motion.div 
                key={index}
                className="related-post-card"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(25, 103, 210, 0.2)' }}
              >
                <span className="related-post-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to="/blog" className="read-more-link">
                  Read Article →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      */}

      {/* Final CTA Section */}
      <motion.section 
        className="blog-post-cta-final"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div 
            className="final-cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Overcome Your Back Pain?</h2>
            <p>
              Don't suffer from lower back pain anymore. Our experienced physiotherapists can help you 
              achieve lasting relief and prevent future episodes. Book your consultation today and take 
              the first step toward a pain-free life.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Schedule Consultation
              </Link>
              <Link to="/testimonials" className="btn btn-secondary btn-large">
                See Patient Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default BlogPost;
