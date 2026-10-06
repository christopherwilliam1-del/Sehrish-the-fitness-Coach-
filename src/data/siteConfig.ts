export interface PhilosophyItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'Flame' | 'Dumbbell' | 'Target' | 'Scale';
}

export interface ExerciseStep {
  name: string;
  sets: string;
  reps: string;
  rest: string;
  cue: string;
}

export interface WorkoutItem {
  id: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'All Levels' | 'Advanced';
  duration: string;
  description: string;
  image: string;
  equipment: string;
  focusAreas: string[];
  warmup: string[];
  exercises: ExerciseStep[];
  cooldown: string[];
  workoutUrl?: string;
}

export interface ResourceSection {
  heading: string;
  points: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  format: string;
  description: string;
  image: string;
  downloadUrl?: string;
  keyTakeaways: string[];
  sections: ResourceSection[];
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  category: string;
  description: string;
  embedUrl: string;
  thumbnail: string;
  keyPoints: string[];
}

export interface SocialPost {
  id: string;
  caption: string;
  category: string;
  image: string;
  permalink: string;
  aspectRatio: 'square' | 'portrait';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  verifiedContext: string;
  isPlaceholder: boolean;
  avatarPlaceholder?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  instagramUsername: string;
  instagramUrl: string;
  instagramDmUrl: string;
  locationLabel: string;
  accentColor: string;
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    supportingText: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    credibilityText: string;
    heroImage: string;
    profileImage: string;
    useProfilePlaceholderBadge: boolean;
  };
  about: {
    heading: string;
    subheadline: string;
    aboutImage: string;
    usePlaceholderBadge: boolean;
    whoSheIs: string;
    approachToFitness: string;
    whatMotivatesHer: string;
    whatPeopleCanLearn: string;
    consistencyPhilosophy: string;
    ctaText: string;
  };
  philosophy: PhilosophyItem[];
  workouts: WorkoutItem[];
  resources: ResourceItem[];
  featuredVideo: {
    heading: string;
    subheading: string;
    ctaText: string;
    primaryVideo: VideoItem;
    additionalVideos: VideoItem[];
  };
  socialGallery: {
    heading: string;
    subheading: string;
    ctaText: string;
    posts: SocialPost[];
  };
  testimonials: {
    heading: string;
    subheading: string;
    disclaimerNote: string;
    items: TestimonialItem[];
  };
  faq: FaqItem[];
  contact: {
    heading: string;
    supportingText: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    goalOptions: string[];
  };
}

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  brandName: 'SEHRISH MALL',
  tagline: 'Fitness · Training · Lifestyle',
  instagramUsername: '@sehrish.mall',
  instagramUrl: 'https://www.instagram.com/sehrish.mall/',
  instagramDmUrl: 'https://ig.me/m/sehrish.mall',
  locationLabel: 'Digital Training & Resource Hub',
  accentColor: '#D4AF37',
  hero: {
    headlineLine1: 'STRONGER BODY.',
    headlineLine2: 'STRONGER MIND.',
    supportingText:
      'Build strength, confidence and sustainable fitness habits with a training approach designed around your goals.',
    primaryCtaText: 'START YOUR JOURNEY',
    secondaryCtaText: 'EXPLORE WORKOUTS',
    credibilityText: 'FITNESS · TRAINING · LIFESTYLE',
    heroImage: '/src/assets/images/hero_fitness_studio_1791284850006.jpg',
    profileImage: '/src/assets/images/about_athletic_editorial_1791284862529.jpg',
    useProfilePlaceholderBadge: true,
  },
  about: {
    heading: 'MEET SEHRISH',
    subheadline: 'Dedicated to intentional movement, sustainable strength, and building confidence inside and outside the gym.',
    aboutImage: '/src/assets/images/about_athletic_editorial_1791284862529.jpg',
    usePlaceholderBadge: true,
    whoSheIs:
      'Sehrish Mall (@sehrish.mall) is a female fitness and gym personality and content creator sharing her personal training journey, gym sessions, and active lifestyle with her community.',
    approachToFitness:
      'Rather than chasing short-term extremes or unsustainable quick fixes, her approach centers on structured resistance training, mindful movement quality, and progressive habits that fit into real life.',
    whatMotivatesHer:
      'Driven by the mental clarity and resilience that come from showing up consistently, she views the gym as a space for self-respect, focus, and continuous personal growth.',
    whatPeopleCanLearn:
      'Through her platform and training hubs, followers learn how to structure balanced workouts, approach the gym floor with confidence, prioritize proper form, and enjoy the process of getting stronger.',
    consistencyPhilosophy:
      'True progress is built through manageable daily routines—balancing focused training sessions with adequate recovery, practical nourishment, and long-term patience.',
    ctaText: 'LEARN MORE',
  },
  philosophy: [
    {
      id: 'phil-1',
      number: '01',
      title: 'CONSISTENCY',
      description:
        'Sustainable routines always outperform temporary intensity. Showing up regularly with focus creates lasting physical and mental momentum.',
      iconName: 'Flame',
    },
    {
      id: 'phil-2',
      number: '02',
      title: 'STRENGTH',
      description:
        'Progressive resistance training designed to build capable muscle, resilient joints, and everyday physical confidence.',
      iconName: 'Dumbbell',
    },
    {
      id: 'phil-3',
      number: '03',
      title: 'DISCIPLINE',
      description:
        'Structured programming and intentional execution that keep you moving forward even after initial motivation fades.',
      iconName: 'Target',
    },
    {
      id: 'phil-4',
      number: '04',
      title: 'BALANCE',
      description:
        'Harmonizing challenging gym sessions with restorative mobility, quality rest, and a realistic lifestyle you genuinely enjoy.',
      iconName: 'Scale',
    },
  ],
  workouts: [
    {
      id: 'workout-strength',
      category: 'STRENGTH',
      difficulty: 'Intermediate',
      duration: '45–55 Min',
      description:
        'Foundational compound lifts and controlled accessory movements focused on progressive overload and total-body force production.',
      image: '/src/assets/images/workout_strength_training_1791284874032.jpg',
      equipment: 'Barbell, Dumbbells, Bench',
      focusAreas: ['Compound Mechanics', 'Progressive Overload', 'Core Bracing'],
      warmup: [
        '5 minutes light incline walk or stationary bike to elevate core temperature',
        '2 sets of 10 world’s greatest stretches + thoracic rotations',
        '2 warm-up ramp sets on your primary compound lift with light load',
      ],
      exercises: [
        {
          name: 'Goblet or Barbell Squat',
          sets: '4',
          reps: '6–8',
          rest: '120s',
          cue: 'Maintain a braced torso, control the 3-second eccentric descent, and drive evenly through mid-foot.',
        },
        {
          name: 'Romanian Deadlift (Dumbbell or Barbell)',
          sets: '3',
          reps: '8–10',
          rest: '90s',
          cue: 'Hinge at the hips with a neutral spine until a deep hamstring stretch is felt; squeeze glutes to return.',
        },
        {
          name: 'Incline Dumbbell Press',
          sets: '3',
          reps: '8–10',
          rest: '90s',
          cue: 'Set bench at 30 degrees, lower dumbbells with elbows at a comfortable 45-degree angle.',
        },
        {
          name: 'Chest-Supported Dumbbell Row',
          sets: '3',
          reps: '10–12',
          rest: '75s',
          cue: 'Pull elbows back toward hips, pausing briefly at peak contraction without shrugging shoulders.',
        },
      ],
      cooldown: [
        '60s per side couch stretch for hip flexors',
        '60s child’s pose with slow nasal breathing',
      ],
    },
    {
      id: 'workout-full-body',
      category: 'FULL BODY',
      difficulty: 'All Levels',
      duration: '45 Min',
      description:
        'Balanced upper and lower body programming in a single efficient session—ideal for building symmetry and conditioning.',
      image: '/src/assets/images/hero_fitness_studio_1791284850006.jpg',
      equipment: 'Dumbbells, Cable Machine or Bands',
      focusAreas: ['Total Body Integration', 'Movement Efficiency', 'Work Capacity'],
      warmup: [
        '4 minutes dynamic marching, arm circles, and bodyweight squats',
        '15 glute bridges + 10 scapular push-ups',
      ],
      exercises: [
        {
          name: 'Dumbbell Reverse Lunge',
          sets: '3',
          reps: '10 / leg',
          rest: '75s',
          cue: 'Step back with control, keep front shin vertical, and drive through the front heel.',
        },
        {
          name: 'Seated Cable or Band Row',
          sets: '3',
          reps: '10–12',
          rest: '60s',
          cue: 'Keep chest tall and initiate the pull by retracting your shoulder blades.',
        },
        {
          name: 'Dumbbell Overhead Shoulder Press',
          sets: '3',
          reps: '8–10',
          rest: '75s',
          cue: 'Brace glutes and abs to prevent lower-back arching as you press overhead.',
        },
        {
          name: 'Plank Pull-Through',
          sets: '3',
          reps: '12 total',
          rest: '60s',
          cue: 'Keep hips square to the floor while reaching underneath to move the light weight across.',
        },
      ],
      cooldown: [
        '90s standing hamstring & calf stretch',
        '60s doorway chest opener',
      ],
    },
    {
      id: 'workout-lower-body',
      category: 'LOWER BODY',
      difficulty: 'Intermediate',
      duration: '50 Min',
      description:
        'Targeted glute, quad, and hamstring development combining hip-hinge patterns, unilateral stability, and controlled tempo.',
      image: '/src/assets/images/workout_strength_training_1791284874032.jpg',
      equipment: 'Barbell, Dumbbells, Bench',
      focusAreas: ['Glute & Hamstring Chain', 'Quad Stability', 'Unilateral Balance'],
      warmup: [
        '5 minutes incline treadmill walk',
        '2 sets of 12 lateral band walks + 10 bodyweight hip hinges',
      ],
      exercises: [
        {
          name: 'Barbell or Dumbbell Hip Thrust',
          sets: '4',
          reps: '8–10',
          rest: '90s',
          cue: 'Tuck chin slightly, keep ribs down, and pause for 2 full seconds at top lockout.',
        },
        {
          name: 'Bulgarian Split Squat',
          sets: '3',
          reps: '8–10 / leg',
          rest: '90s',
          cue: 'Slight forward torso lean for glute bias; lower smoothly until back knee nears the floor.',
        },
        {
          name: 'Dumbbell Romanian Deadlift',
          sets: '3',
          reps: '10–12',
          rest: '75s',
          cue: 'Keep weights close to thighs and push hips horizontally toward the wall behind you.',
        },
        {
          name: 'Standing or Seated Calf Raise',
          sets: '3',
          reps: '12–15',
          rest: '45s',
          cue: 'Full stretch at the bottom and controlled 1-second pause at the top.',
        },
      ],
      cooldown: [
        '60s per side seated figure-four glute stretch',
        '60s supine hamstring stretch',
      ],
    },
    {
      id: 'workout-upper-body',
      category: 'UPPER BODY',
      difficulty: 'All Levels',
      duration: '40 Min',
      description:
        'Sculpting and strengthening session for back posture, shoulder stability, chest, and arms with smooth cable and free-weight work.',
      image: '/src/assets/images/video_training_cover_1791284894952.jpg',
      equipment: 'Dumbbells, Lat Pulldown / Cables',
      focusAreas: ['Back Posture', 'Shoulder Sculpt', 'Arm Definition'],
      warmup: [
        '2 sets of 15 band pull-aparts and 10 shoulder dislocates with light band',
        '10 incline push-ups with controlled tempo',
      ],
      exercises: [
        {
          name: 'Wide-Grip or Neutral Lat Pulldown',
          sets: '4',
          reps: '10–12',
          rest: '75s',
          cue: 'Drive elbows down toward your sides while keeping chest subtly lifted.',
        },
        {
          name: 'Dumbbell Lateral Raise',
          sets: '3',
          reps: '12–15',
          rest: '60s',
          cue: 'Raise slightly forward in the scapular plane with soft elbows and controlled lowering.',
        },
        {
          name: 'Single-Arm Dumbbell Row',
          sets: '3',
          reps: '10 / side',
          rest: '60s',
          cue: 'Support on bench, pull dumbbell toward hip crease with a flat back.',
        },
        {
          name: 'Cable Face Pull + Tricep Pressdown Superset',
          sets: '3',
          reps: '12 + 12',
          rest: '60s',
          cue: 'Keep elbows pinned during pressdowns; externally rotate shoulders on face pulls.',
        },
      ],
      cooldown: [
        '60s overhead tricep and lat stretch per side',
        '60s upper trap and neck release',
      ],
    },
    {
      id: 'workout-core',
      category: 'CORE',
      difficulty: 'All Levels',
      duration: '25 Min',
      description:
        'Deep core stability, anti-rotation control, and abdominal endurance designed to support heavy lifts and posture.',
      image: '/src/assets/images/workout_mobility_flow_1791284884717.jpg',
      equipment: 'Exercise Mat, Optional Light Weight',
      focusAreas: ['Anti-Extension', 'Oblique Stability', 'Pelvic Control'],
      warmup: [
        '2 minutes diaphragmatic 360-degree breathing on mat',
        '10 slow cat-cow spinal articulations',
      ],
      exercises: [
        {
          name: 'Dead Bug with Controlled Exhale',
          sets: '3',
          reps: '8 / side',
          rest: '45s',
          cue: 'Press lower back gently into the mat and exhale fully as opposite arm and leg extend.',
        },
        {
          name: 'Side Plank Hip Lifts',
          sets: '3',
          reps: '10 / side',
          rest: '45s',
          cue: 'Stack elbow directly beneath shoulder and maintain a straight line from head to heels.',
        },
        {
          name: 'Forearm Plank with Slow Toe Taps',
          sets: '3',
          reps: '40s work',
          rest: '45s',
          cue: 'Keep glutes engaged and prevent hips from swaying side to side.',
        },
        {
          name: 'Hollow Body Hold or Tuck Hold',
          sets: '3',
          reps: '30s hold',
          rest: '45s',
          cue: 'Keep ribs tucked toward pelvis; bend knees closer if lower back lifts off the floor.',
        },
      ],
      cooldown: [
        '60s gentle cobra pose abdominal stretch',
        '60s supine spinal twist per side',
      ],
    },
    {
      id: 'workout-mobility',
      category: 'MOBILITY',
      difficulty: 'All Levels',
      duration: '25–30 Min',
      description:
        'Active joint range-of-motion flow for hips, thoracic spine, ankles, and shoulders to enhance recovery and squat depth.',
      image: '/src/assets/images/workout_mobility_flow_1791284884717.jpg',
      equipment: 'Exercise Mat',
      focusAreas: ['Hip Internal/External Rotation', 'Thoracic Extension', 'Ankle Dorsiflexion'],
      warmup: [
        '2 minutes slow nasal breathing and neck mobility circles',
      ],
      exercises: [
        {
          name: '90/90 Hip Switches with Forward Lean',
          sets: '3',
          reps: '6 / side',
          rest: '30s',
          cue: 'Rotate hips smoothly while keeping torso tall; hinge forward over front shin for 3 breaths.',
        },
        {
          name: 'Quadruped Thoracic Windmills',
          sets: '3',
          reps: '8 / side',
          rest: '30s',
          cue: 'Exhale as you open your chest toward the ceiling, keeping hips stable over knees.',
        },
        {
          name: 'Deep Squat Pry & Ankle Rocks',
          sets: '3',
          reps: '45s flow',
          rest: '30s',
          cue: 'Hold onto a sturdy upright if needed, gently shifting weight over toes to open ankles.',
        },
        {
          name: 'Prone Swimmers (Shoulder CARs)',
          sets: '2',
          reps: '6 slow reps',
          rest: '45s',
          cue: 'Hover hands off the floor, sweeping arms from overhead to lower back without rushing.',
        },
      ],
      cooldown: [
        '2 minutes legs-up-the-wall parasympathetic recovery breathing',
      ],
    },
    {
      id: 'workout-beginner',
      category: 'BEGINNER FITNESS',
      difficulty: 'Beginner',
      duration: '35 Min',
      description:
        'Approachable, confidence-building introduction to fundamental movement patterns with clear pacing and zero intimidation.',
      image: '/src/assets/images/about_athletic_editorial_1791284862529.jpg',
      equipment: 'Light Dumbbells or Bodyweight',
      focusAreas: ['Foundational Form', 'Gym Confidence', 'Steady Pacing'],
      warmup: [
        '5 minutes brisk walk and gentle joint circles (shoulders, hips, ankles)',
      ],
      exercises: [
        {
          name: 'Box Squat (Sit-to-Stand to Bench)',
          sets: '3',
          reps: '10',
          rest: '60s',
          cue: 'Control your descent to lightly tap the bench, then stand tall with chest proud.',
        },
        {
          name: 'Incline Push-Up (Hands on Bench)',
          sets: '3',
          reps: '8–10',
          rest: '60s',
          cue: 'Keep body in a straight plank line and lower chest toward the edge of the bench.',
        },
        {
          name: 'Supported Single-Arm Dumbbell Row',
          sets: '3',
          reps: '10 / side',
          rest: '60s',
          cue: 'Focus on pulling with your back muscles rather than curling with your wrist.',
        },
        {
          name: 'Glute Bridge on Mat',
          sets: '3',
          reps: '12',
          rest: '60s',
          cue: 'Drive through heels to lift hips until knees, hips, and shoulders align.',
        },
      ],
      cooldown: [
        '3 minutes full-body gentle stretching and deep breathing',
      ],
    },
    {
      id: 'workout-home',
      category: 'HOME WORKOUTS',
      difficulty: 'All Levels',
      duration: '30 Min',
      description:
        'Minimal-equipment training designed for living rooms or travel days so you never miss a beat in your weekly routine.',
      image: '/src/assets/images/workout_mobility_flow_1791284884717.jpg',
      equipment: 'Mat & Optional Pair of Dumbbells',
      focusAreas: ['Time Efficiency', 'Minimal Space', 'Metabolic Conditioning'],
      warmup: [
        '3 minutes jumping jacks (or low-impact step jacks), inchworms, and bodyweight lunges',
      ],
      exercises: [
        {
          name: 'Tempo Bodyweight or Goblet Squat (3s Down)',
          sets: '3',
          reps: '12–15',
          rest: '45s',
          cue: 'Use slow tempo to create muscular tension even without heavy gym machines.',
        },
        {
          name: 'Alternating Reverse Lunges',
          sets: '3',
          reps: '10 / leg',
          rest: '45s',
          cue: 'Keep torso upright and maintain steady rhythm from rep to rep.',
        },
        {
          name: 'Push-Up to Downward Dog Tap',
          sets: '3',
          reps: '10',
          rest: '60s',
          cue: 'Perform a controlled push-up (knees or toes), then press hips back into a stretch.',
        },
        {
          name: 'Bicycle Crunches (Slow & Controlled)',
          sets: '3',
          reps: '16 total',
          rest: '45s',
          cue: 'Rotate ribcage toward opposite knee rather than pulling on your neck.',
        },
      ],
      cooldown: [
        '2 minutes seated forward fold and chest opener stretch',
      ],
    },
  ],
  resources: [
    {
      id: 'res-workout-guide',
      title: 'FREE WORKOUT GUIDE',
      category: 'Program Structure',
      readTime: '6 Min Read',
      format: 'Interactive Guide & Checklist',
      description:
        'A structured weekly training blueprint covering split selection, exercise ordering, and tracking progressive overload.',
      image: '/src/assets/images/workout_strength_training_1791284874032.jpg',
      keyTakeaways: [
        'How to choose between 3-day Full Body and 4-day Upper/Lower splits',
        'Structuring warm-ups, primary compound lifts, and accessory work',
        'How to log sets and reps to ensure steady week-over-week progress',
      ],
      sections: [
        {
          heading: '1. Selecting Your Weekly Schedule',
          points: [
            '3 Days/Week: Full Body sessions (e.g., Mon / Wed / Fri) allow maximum recovery between workouts while hitting every muscle group frequently.',
            '4 Days/Week: Upper / Lower split (e.g., Mon / Tue / Thu / Fri) balances volume and recovery for intermediate trainees.',
          ],
        },
        {
          heading: '2. Anatomy of an Effective Session',
          points: [
            'Dynamic Preparation (5–8 mins): Raise core temperature and mobilize the primary joints being trained.',
            'Primary Compound Lift (15 mins): Squat, hinge, press, or pull when your nervous system is freshest.',
            'Targeted Accessories (20 mins): Unilateral movements and isolation work in the 8–15 rep range.',
          ],
        },
        {
          heading: '3. Progressive Overload Made Simple',
          points: [
            'Use a double-progression model: pick a rep range (e.g., 8–10 reps). Keep the weight the same until you hit 10 reps on all sets with clean form, then increase load slightly.',
          ],
        },
      ],
    },
    {
      id: 'res-beginner-guide',
      title: 'BEGINNER GUIDE',
      category: 'Foundations',
      readTime: '5 Min Read',
      format: 'Starter Handbook',
      description:
        'Everything you need to step onto the gym floor with clarity—fundamental movement patterns, gym etiquette, and realistic pacing.',
      image: '/src/assets/images/about_athletic_editorial_1791284862529.jpg',
      keyTakeaways: [
        'Mastering the 6 foundational movement patterns before adding heavy weight',
        'Overcoming gym floor hesitation with a simple pre-planned checklist',
        'Why soreness is not the primary indicator of an effective workout',
      ],
      sections: [
        {
          heading: '1. The Six Core Movement Patterns',
          points: [
            'Squat (knee-dominant), Hip Hinge (hip-dominant), Horizontal Push, Horizontal Pull, Vertical Push, and Vertical Pull—plus Core Stabilization.',
            'Focus on smooth, controlled tempo for your first 4 weeks to build neuromuscular coordination.',
          ],
        },
        {
          heading: '2. Navigating the Gym with Confidence',
          points: [
            'Always arrive with 4–5 written exercises so you never feel lost walking between machines.',
            'Start in a dedicated corner with a bench and dumbbells if the main barbell rack is busy.',
          ],
        },
      ],
    },
    {
      id: 'res-fitness-tips',
      title: 'FITNESS TIPS',
      category: 'Habit Systems',
      readTime: '4 Min Read',
      format: 'Practical Playbook',
      description:
        'Ten high-impact habits for staying consistent during busy weeks, improving sleep quality, and avoiding all-or-nothing burnout.',
      image: '/src/assets/images/hero_fitness_studio_1791284850006.jpg',
      keyTakeaways: [
        'Using the "Minimum Effective Dose" rule on high-stress workdays',
        'Evening wind-down habits that support muscle recovery and energy',
        'How to measure progress beyond the bathroom scale',
      ],
      sections: [
        {
          heading: '1. Ditch the All-or-Nothing Mindset',
          points: [
            'A focused 25-minute session keeps the habit alive far better than skipping an entire week waiting for a "perfect" 90-minute window.',
            'Never miss twice in a row—if life interrupts Monday, adjust calmly on Tuesday.',
          ],
        },
        {
          heading: '2. Non-Scale Markers of Progress',
          points: [
            'Track energy stability throughout the afternoon, resting heart rate, posture, sleep depth, and how effortlessly you handle daily stairs or groceries.',
          ],
        },
      ],
    },
    {
      id: 'res-mobility-guide',
      title: 'MOBILITY GUIDE',
      category: 'Recovery & Flow',
      readTime: '5 Min Read',
      format: 'Routine Reference',
      description:
        'Daily 10-minute joint prep and desk-posture reset sequences for healthier hips, mobile shoulders, and pain-free training.',
      image: '/src/assets/images/workout_mobility_flow_1791284884717.jpg',
      keyTakeaways: [
        'Difference between passive static stretching and active joint mobility',
        '5-minute pre-leg-day hip and ankle unlocking routine',
        'Evening thoracic spine decompression for desk workers',
      ],
      sections: [
        {
          heading: '1. Pre-Workout Dynamic Prep',
          points: [
            'Save long static holds for after your session. Before lifting, use dynamic movements like 90/90 hip switches, leg swings, and thoracic rotations.',
          ],
        },
        {
          heading: '2. Daily Desk Reset',
          points: [
            'Every 90 minutes of sitting, stand for 60 seconds: perform 5 chin tucks, 5 scapular squeezes, and a brief hip flexor lunge stretch.',
          ],
        },
      ],
    },
    {
      id: 'res-nutrition-basics',
      title: 'NUTRITION BASICS',
      category: 'Fuel & Wellness',
      readTime: '6 Min Read',
      format: 'Educational Overview',
      description:
        'Non-restrictive, practical principles for fueling workouts, prioritizing protein, staying hydrated, and building balanced plates.',
      image: '/src/assets/images/video_training_cover_1791284894952.jpg',
      keyTakeaways: [
        'Building a balanced plate without obsessive calorie anxiety',
        'Pre- and post-training fuel timing for steady gym performance',
        'Hydration benchmarks for active training days',
      ],
      sections: [
        {
          heading: '1. The Balanced Plate Framework',
          points: [
            'Aim to anchor each main meal around a quality protein source, colorful fiber-rich vegetables, complex carbohydrates to fuel training, and healthy fats.',
            'Educational note: This guide is for general wellness awareness only and is not medical or clinical dietetic advice.',
          ],
        },
        {
          heading: '2. Fueling Around Your Workouts',
          points: [
            'Having a digestible carbohydrate and protein snack 60–90 minutes before training helps sustain focus and lifting output.',
          ],
        },
      ],
    },
    {
      id: 'res-training-faq',
      title: 'TRAINING FAQ',
      category: 'Knowledge Base',
      readTime: '5 Min Read',
      format: 'Quick Answers',
      description:
        'Clear, straightforward answers to common questions on rest days, rep ranges, lifting shoes, and breaking through plateaus.',
      image: '/src/assets/images/workout_strength_training_1791284874032.jpg',
      keyTakeaways: [
        'How long to rest between heavy compound sets vs. isolation sets',
        'Why flat-soled footwear improves stability on squats and deadlifts',
        'When to take a deload week to refresh joints and motivation',
      ],
      sections: [
        {
          heading: '1. Rest Intervals & Recovery',
          points: [
            'Rest 90–150 seconds on heavy multi-joint lifts so you can maintain high quality reps; rest 60–75 seconds on smaller isolation exercises.',
            'Muscles repair and grow stronger during rest and sleep—aim for 2–3 recovery or active-mobility days per week.',
          ],
        },
        {
          heading: '2. Equipment & Footwear Tips',
          points: [
            'For lower-body strength days, flat, firm shoes (or training barefoot where permitted) create a stable base compared to squishy running cushions.',
          ],
        },
      ],
    },
  ],
  featuredVideo: {
    heading: 'TRAIN WITH SEHRISH',
    subheading: 'Watch training sessions, fitness education and practical tips.',
    ctaText: 'VIEW ALL VIDEOS',
    primaryVideo: {
      id: 'vid-main',
      title: 'Intentional Strength: Full Gym Session & Form Breakdown',
      duration: '14:20',
      category: 'Training Session',
      description:
        'Step inside the studio for a complete lower-body and core strength session focusing on controlled tempo, bracing cues, and sustainable effort.',
      embedUrl: '',
      thumbnail: '/src/assets/images/video_training_cover_1791284894952.jpg',
      keyPoints: [
        'Warm-up sequence for hip and core activation (00:00 – 02:30)',
        'Compound hip hinge & squat tempo breakdown (02:30 – 08:45)',
        'Unilateral stability & controlled finisher cues (08:45 – 14:20)',
      ],
    },
    additionalVideos: [
      {
        id: 'vid-2',
        title: 'Upper Body Posture & Sculpting Essentials',
        duration: '11:45',
        category: 'Form & Technique',
        description: 'How to engage your lats and rear delts properly without letting neck tension take over.',
        embedUrl: '',
        thumbnail: '/src/assets/images/hero_fitness_studio_1791284850006.jpg',
        keyPoints: [
          'Setting scapular position before pulling',
          'Choosing optimal elbow angles on rows and presses',
        ],
      },
      {
        id: 'vid-3',
        title: '15-Minute Morning Mobility & Core Awakening',
        duration: '15:10',
        category: 'Mobility Flow',
        description: 'A calm, energizing mat routine for active recovery days or pre-lifting preparation.',
        embedUrl: '',
        thumbnail: '/src/assets/images/workout_mobility_flow_1791284884717.jpg',
        keyPoints: [
          'Thoracic spine openers & 360 breathing',
          'Active hip 90/90 transitions',
        ],
      },
    ],
  },
  socialGallery: {
    heading: 'FOLLOW THE JOURNEY',
    subheading: 'Daily training snapshots, movement discipline, and lifestyle moments on Instagram.',
    ctaText: 'FOLLOW ON INSTAGRAM',
    posts: [
      {
        id: 'ig-1',
        caption: 'Consistency over perfection. Showing up for the foundational lifts week after week. #StrengthTraining #MindfulMovement',
        category: 'Strength Session',
        image: '/src/assets/images/about_athletic_editorial_1791284862529.jpg',
        permalink: 'https://www.instagram.com/sehrish.mall/',
        aspectRatio: 'portrait',
      },
      {
        id: 'ig-2',
        caption: 'Quiet studio mornings before the rush. Setting intentions for a focused upper body block.',
        category: 'Studio Life',
        image: '/src/assets/images/hero_fitness_studio_1791284850006.jpg',
        permalink: 'https://www.instagram.com/sehrish.mall/',
        aspectRatio: 'square',
      },
      {
        id: 'ig-3',
        caption: 'Progressive overload starts with mastering control on every single rep.',
        category: 'Training Discipline',
        image: '/src/assets/images/workout_strength_training_1791284874032.jpg',
        permalink: 'https://www.instagram.com/sehrish.mall/',
        aspectRatio: 'square',
      },
      {
        id: 'ig-4',
        caption: 'Recovery days are part of the program. 25 minutes of hip and thoracic mobility in the sunlight.',
        category: 'Mobility & Balance',
        image: '/src/assets/images/workout_mobility_flow_1791284884717.jpg',
        permalink: 'https://www.instagram.com/sehrish.mall/',
        aspectRatio: 'portrait',
      },
    ],
  },
  testimonials: {
    heading: 'REAL PEOPLE. REAL PROGRESS.',
    subheading:
      'Stories of consistency, strength, and confidence from women training with our structured routines.',
    disclaimerNote:
      'All testimonials, member photos, and reflections can be customized anytime via the Site Editor.',
    items: [
      {
        id: 'test-1',
        name: 'Amna Tariq',
        role: 'Beginner Fitness & Consistency Track',
        quote:
          '"Before starting these structured workouts, I used to feel intimidated walking onto the gym floor. Having clear form cues and a realistic 4-day routine helped me build real lower-body and core strength while feeling completely confident in my own skin."',
        verifiedContext: '12 Weeks · Consistent 4x/Week Training',
        isPlaceholder: false,
        avatarPlaceholder: '/src/assets/images/testimonial_member_amna_1791287110814.jpg',
      },
      {
        id: 'test-2',
        name: 'Zara Siddiqui',
        role: 'Strength & Mobility Routine',
        quote:
          '"Focusing on progressive overload instead of exhausting random circuits changed everything for me. My posture, energy levels throughout the workday, and lifting technique have improved dramatically without any extreme burnout."',
        verifiedContext: '16 Weeks · Strength & Posture Focus',
        isPlaceholder: false,
        avatarPlaceholder: '/src/assets/images/testimonial_member_zara_1791287131063.jpg',
      },
      {
        id: 'test-3',
        name: 'Maham Noor',
        role: 'Home & Gym Hybrid Training',
        quote:
          '"The balance between focused strength sessions and the 25-minute mobility flows made fitness sustainable for my busy schedule. I finally look forward to my workouts and feel stronger every single week."',
        verifiedContext: '10 Weeks · Hybrid Gym & Home Routine',
        isPlaceholder: false,
        avatarPlaceholder: '/src/assets/images/testimonial_member_maham_1791287142353.jpg',
      },
    ],
  },
  faq: [
    {
      id: 'faq-1',
      question: 'How can I start training?',
      answer:
        'You can begin immediately by exploring the free workout templates and downloadable starter guides right here on the website, or reach out through the consultation form below to discuss your specific fitness goals.',
    },
    {
      id: 'faq-2',
      question: 'What type of workouts do you offer?',
      answer:
        'The training hub covers eight structured categories: Strength, Full Body, Lower Body, Upper Body, Core, Mobility, Beginner Fitness, and minimal-equipment Home Workouts—all focused on controlled form and sustainable progression.',
    },
    {
      id: 'faq-3',
      question: 'Are the workouts suitable for beginners?',
      answer:
        'Yes. Every workout includes clear movement cues, tempo recommendations, and scalable options so beginners can build foundational technique at their own comfortable pace.',
    },
    {
      id: 'faq-4',
      question: 'Can I train at home?',
      answer:
        'Absolutely. Our Home Workouts, Core, and Mobility guides are specifically designed for living rooms or small spaces using bodyweight or a single pair of dumbbells.',
    },
    {
      id: 'faq-5',
      question: 'How can I contact Sehrish?',
      answer:
        'Instagram (@sehrish.mall) is the official contact channel. Fill out the consultation form below and click submit to automatically format your details and send your message directly to her Instagram.',
    },
    {
      id: 'faq-6',
      question: 'Do you offer personalized coaching?',
      answer:
        'Availability for personalized training guidance and consultation inquiries can be requested through the contact form below. Submit your current routine and goals to receive current details.',
    },
    {
      id: 'faq-7',
      question: 'How often should I train?',
      answer:
        'For most people, 3 to 4 structured strength sessions per week paired with daily walking and 1 to 2 short mobility sessions provides an ideal balance of progress and recovery.',
    },
  ],
  contact: {
    heading: 'READY TO START?',
    supportingText:
      'Take the first step toward a stronger, healthier and more confident version of yourself.',
    primaryCtaText: 'GET STARTED',
    secondaryCtaText: 'CONTACT SEHRISH',
    goalOptions: [
      'Build Overall Strength & Muscle Tone',
      'Establish a Consistent Weekly Routine',
      'Beginner Gym Confidence & Technique',
      'Home Training & Mobility Balance',
      'General Inquiry / Collaboration',
    ],
  },
};
