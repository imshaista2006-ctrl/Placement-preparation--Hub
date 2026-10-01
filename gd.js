function showAnswer(topic) {

    let answer = document.getElementById("answer");

    if (topic === "AI") {
        answer.innerHTML =
            "AI as a Boon" +

            "Artificial Intelligence is a great help in our daily life. It makes our work faster, easier and more accurate." +
            "In education, AI helps students learn difficult topics and find information quickly." +
            "In healthcare, it can help doctors detect diseases and analyze medical reports." +
            "AI is also useful in banking, transportation and businesses. Therefore, if used properly, AI can save time," +
            "reduce human effort and improve productivity." +

            " ### AI as a Bane" +

            "AI also has some negative effects. With increasing automation, **some jobs may be replaced by machines**. " +
            "People can also become too dependent on AI and stop using their own creativity and problem-solving skills. " +
            "AI can create **privacy and security issues** and can be misused to spread fake news and create deepfakes. " +
            "Therefore, AI should be used **responsibly and carefully** so that its benefits are greater than its risks. "
    }

    else if (topic === "Education") {
        answer.innerHTML =
            "🟢 Online Education " +

            "Students can study from anywhere. " +
            "It saves travel time and money. " +
            "Recorded lectures can be watched again. " +
            "It provides access to many online resources and courses. " +
            "But it may cause distraction and less interaction. " +

            "🔵 Offline Education " +

            "Students get direct interaction with teachers. " +
            "It improves communication and social skills." +
            "Classroom learning provides better discipline and routine." +
            "Students can ask questions and get instant feedback." +
            "But it requires travel and fixed timings.."

    }
    else if (topic === "WFH") {
        answer.innerHTML =
            "🟢 Work From Home – Advantages" +

            " Saves travel time and money." +
            "Provides flexibility in working hours." +
            "Helps maintain better work-life balance." +
            "Comfortable working environment." +
            "Can improve productivity for some people." +

            "🔴 Work From Home – Disadvantages" +

            "Less face-to-face interaction with colleagues." +
            "Can cause distractions at home." +
            "Work and personal life can become difficult to separate." +
            "Team communication may become challenging." +
            "Some people may feel isolated." 
        
    }

    else if (topic === "Social") {
        answer.innerHTML =
          "  🟢 Positive Impact of Social Media" +

           "   Helps people connect with friends and family." +
             " Provides quick access to news and information." +
             " Helps students find educational content." +
              " Creates opportunities for business and marketing." +
              " Gives people a platform to share their ideas and creativity." +

             " 🔴 Negative Impact of Social Media" +

              " Excessive use can waste time and reduce productivity." +
              " Can cause distraction and addiction." +
            " Fake news can spread very quickly." +
            " Creates privacy and security risks." +
           " Too much comparison with others can negatively affect self-confidence." 
    }
}