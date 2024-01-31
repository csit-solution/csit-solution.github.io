document.addEventListener("DOMContentLoaded", async function () {
  const urls = {
    Chapter_1:
      "https://raw.githubusercontent.com/yana-music/CSITSolution/main/notes/4thSem/TOC/TheoryofComputationHandwrittennotes/Chapter-1/CH-1-",
    Chapter_2:
      "https://raw.githubusercontent.com/yana-music/CSITSolution/main/notes/4thSem/TOC/TheoryofComputationHandwrittennotes/Chapter-2/CH-2-",
    Chapter_3:
      "https://raw.githubusercontent.com/yana-music/CSITSolution/main/notes/4thSem/TOC/TheoryofComputationHandwrittennotes/Chapter-3/CH-3-",
    Chapter_4:
      "https://raw.githubusercontent.com/yana-music/CSITSolution/main/notes/4thSem/TOC/TheoryofComputationHandwrittennotes/Chapter-4/CH-4-",
    Chapter_5:
      "https://raw.githubusercontent.com/yana-music/CSITSolution/main/notes/4thSem/TOC/TheoryofComputationHandwrittennotes/TM-Complexity-Classes-Numericals/TOC-Notes-",
  };

  // Function to manually fetch and store images for a specific chapter
  async function manualFetchAndStoreImages(chapter) {
    let baseImageUrl = urls[chapter];
    let imageArray = [];

    let currentIndex = 0;

    while (true) {
      const imageUrl = `${baseImageUrl}${currentIndex + 1}.JPG`;

      try {
        const response = await fetch(imageUrl);

        if (response.status === 404) {
          break;
        }

        if (response.ok) {
          const imageURL = imageUrl;
          imageArray.push(imageURL);
        } else {
          break;
        }

        currentIndex++;
      } catch (error) {
        break;
      }
    }

    if (imageArray.length > 0) {
      const imageArrayJson = JSON.stringify(imageArray);
      sessionStorage.setItem(chapter, imageArrayJson);
      displayImages(imageArray);
    }
  }

  // Call the function to manually fetch and store images for Chapter_1
  manualFetchAndStoreImages("Chapter_1");
  manualFetchAndStoreImages("Chapter_2");
  manualFetchAndStoreImages("Chapter_3");
  manualFetchAndStoreImages("Chapter_4");
  manualFetchAndStoreImages("Chapter_5");
  // ... (call for other chapters)
});

document.addEventListener("DOMContentLoaded", function () {
  const backCover =
    "https://raw.githubusercontent.com/yana-music/CSITSolution/main/solutionBookCover/2079KECCOVER/KEC2079BACKCOVER.jpg";
  const frontCover =
    "https://raw.githubusercontent.com/yana-music/CSITSolution/main/solutionBookCover/2079KECCOVER/KEC2079FRONTCOVER.jpg";

  document.getElementById("backCover").src = backCover;
  document.getElementById("frontCover").src = frontCover;
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaders").style.display = "none";

  // Check if the username and semester are already saved in localStorage
  const savedUsername = localStorage.getItem("username");

  var savedSemester = localStorage.getItem("semester");
  const semesterStatus = savedSemester ? undefined : "not selected";

  // // Add click event listeners to toggle sub-list visibility
  const listItems = document.querySelectorAll("li.has-sub-list");
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("expanded");
      const subList = item.querySelector(".sub-list");
      if (subList) {
        subList.classList.toggle("visible");
      }
    });
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function displayInfo(username, savedSemester) {
    if (savedSemester === null) {
      document.getElementById(
        "greeting"
      ).innerHTML = `Welcome Back ${username}.<br> <span> You are doing great! Keep on Studying! <hr> <br> <h4> Semester: ${savedSemester}`;
    } else if (savedSemester === "1") {
      document.getElementById(
        "greeting"
      ).innerHTML = `Welcome Back, ${username}.<br> <span> You are doing great! Keep on Studying! <hr> <h4> Semester: ${savedSemester}st`;
    } else if (savedSemester === "2") {
      document.getElementById(
        "greeting"
      ).innerHTML = `Welcome Back, ${username}.<br> <span> You are doing great! Keep on Studying! 

            <hr> <h4>Semester: ${savedSemester}nd`;
    } else if (savedSemester === "3") {
      document.getElementById(
        "greeting"
      ).innerHTML = `Welcome Back, ${username}.<br> <span> You are doing great! Keep on Studying! <hr> <h4> Semester: ${savedSemester}rd`;
    } else {
      document.getElementById(
        "greeting"
      ).innerHTML = `Welcome Back, ${username}.<br> <span> You are doing great! Keep on Studying! <hr> <h4> Semester: ${savedSemester}th`;
    }
  }

  function displayFirstInfo(firstUsername) {
    document.getElementById(
      "greeting"
    ).textContent = `Hello ${firstUsername} .Best of Luck!`;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (!savedUsername) {
    // If username or semester is not saved, show the modal
    $("#usernameModal").modal("show");
    document.getElementById("content").style.opacity = "0";

    // Save the username and semester to localStorage when the "Save" button is clicked
    $("#saveUsername").on("click", function () {
      const username = $("#usernameInput").val();

      localStorage.setItem("username", username);
      // localStorage.setItem('semester', semester);

      $("#usernameModal").modal("hide");
      document.getElementById("content").style.opacity = "1";
      displayFirstInfo(username);
    });
  } else {
    // If username and semester are saved, display them
    displayInfo(savedUsername, savedSemester);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Aakash Stha
  const firstSem = [
    // Semester 1

    { name: "🚀 Introduction to IT", years: ["Notes Coming Soon!"] },
    { name: "🅒 C Programming", years: ["Coming Soon!"] },
    { name: "🚦Digital Logic", years: ["Coming Soon!"] },
    { name: "♾️ Maths-I", years: ["Notes Coming Soon!"] },
    { name: "⚛ Physics", years: ["Notes Coming Soon!"] },
  ];
  // Semester 2
  const secondSem = [
    {
      name: "∑ Discrete Math",
      years: ["Notes Coming Soon!"],
    },
    {
      name: "🧬Object Oriented Programming",
      years: ["Notes Coming Soon!"],
    },
    {
      name: "🔄 MicroProcessor",
      years: ["Notes Coming Soon!"],
    },
    {
      name: "🔢 Mathematics - II",
      years: ["Notes Coming Soon!"],
    },
    {
      name: "📊 Statistics - I",
      years: ["Notes Coming Soon!"],
    },
  ];
  // Semester 3
  const thirdSem = [
    // Courses for semester 3...
    { name: "🔗 Data Structure and Algorithm", years: ["Notes Coming Soon!"] },
    { name: "🧮 Numerical Method", years: ["Notes Coming Soon!"] },
    { name: "🌌 Computer Graphics", years: ["Notes Coming Soon!"] },
    { name: "🏗️ Computer Architecture", years: ["Notes Coming Soon!"] },
    { name: "📈 Statistics II ", years: ["Notes Coming Soon!"] },
  ];
  // Semester 4
  const fourthSem = [
    // Courses for semester 4...
    {
      name: "🧠 Theory of Computation",
      years: ["Chapter_1", "Chapter_2", "Chapter_3", "Chapter_4", "Chapter_5"],
    },
    { name: "⛁ Database And Management System", years: ["Coming Soon!"] },
    { name: "🤖 Artificial Intelligence	", years: ["Coming Soon!"] },
    { name: "🛜 Computer Network", years: ["Coming Soon!"] },
    { name: "⚙️ Operating System", years: ["Coming Soon!"] },
  ];
  // Semester 5
  const fifthSem = [
    { name: "💡 Design and Analysis of Algorithms", years: ["Coming Soon!"] },
    { name: "🔍 System Analysis and Design", years: ["Coming Soon!"] },
    { name: "🔐 Cryptography", years: ["Coming Soon!"] },
    { name: "🌐 Web Technology", years: ["Coming Soon!"] },
    { name: "🕹️ Simulation and Modeling", years: ["Coming Soon!"] },
    { name: "🗳️ Elective I", years: ["Coming Soon!"] },
  ];
  // Semester 6
  const sixthSem = [
    // Courses for semester 6...
    { name: "🧑‍💻 Software Engineering", years: ["Coming Soon!"] },
    { name: "🖇️ E- Governance", years: ["Coming Soon!"] },
    { name: "📡 NET Centric Computing", years: ["Coming Soon!"] },
    { name: "📦 Compiler Design and Construction", years: ["Coming Soon!"] },
    { name: "📝 Technical Writing", years: ["Coming Soon!"] },
    { name: "🗳️ Elective CourseII", years: ["Coming Soon!"] },
  ];
  // Semester 7
  const seventhSem = [
    // Courses for semester 7...
    { name: "☕️ Advanced Java Programming", years: ["coming soon"] },
    { name: "🔍 Data Warehousing and Data Mining", years: ["Coming Soon!"] },
    { name: "🤝 Principles of Management", years: ["Coming Soon!"] },
    { name: "📆 Project Work", years: ["Coming Soon!"] },
    { name: "🗳️ Elective Course III", years: ["Coming Soon!"] },
  ];
  // Semester 8
  const eightSem = [
    // Courses for semester 8...
    { name: "🗄️ Advanced Database", years: ["Coming Soon!"] },
    { name: "💼 Internship", years: ["Coming Soon!"] },
    { name: "🗳️ Elective IV", years: ["Coming Soon!"] },
    { name: "🗳️ Elective V", years: ["Coming Soon!"] },
  ];

  const semesterValue = localStorage.getItem("semester"); // You can replace this with your actual logic to get the semester value

  const listContainer = document.getElementById("main-list");
  // const listContainerMob = document.getElementById("main-Moblist");

  // Add an event listener to the "Set Semester" button
  document
    .getElementById("semesterSelect")
    .addEventListener("click", function () {
      // Retrieve the selected option value
      const selectedSemester =
        document.getElementById("semesterDropdown").value;

      // Save the selected semester to local storage
      const currentSemester = localStorage.setItem(
        "semester",
        selectedSemester
      );

      // You can add additional logic or function calls here if needed

      // For demonstration, alert the user with the selected semester
      // alert(`Semester ${selectedSemester} selected!`);
    });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function createListItems(subjects) {
    // Clear the existing list items
    const savedSemester = localStorage.getItem("semester");
    const selectedUsername = localStorage.getItem("username");

    displayInfo(selectedUsername, savedSemester);
    listContainer.innerHTML = "";
    // listContainerMob.innerHTML = "";

    subjects.forEach((subject) => {
      const listItem = document.createElement("li");
      listItem.classList.add("has-sub-list");

      const iconElement = document.createElement("i");
      iconElement.classList.add("fas"); // Adding Font Awesome icon class

      const subjectName = document.createTextNode(subject.name);
      listItem.appendChild(iconElement);
      listItem.appendChild(subjectName);

      const subList = document.createElement("ul");
      subList.classList.add("sub-list");

      subject.years.forEach((year) => {
        const subListItem = document.createElement("li");
        const yearNode = document.createTextNode(year);
        subListItem.appendChild(yearNode);
        subList.appendChild(subListItem);
      });

      listItem.appendChild(subList);

      // Append the listItem to both list containers must clone the node
      listContainer.appendChild(listItem.cloneNode(true));
      // listContainerMob.appendChild(listItem);
    });
  }

  // Add an event listener to the "Set Semester" button
  document
    .getElementById("semesterSelect")
    .addEventListener("click", function () {
      // Retrieve the selected option value
      const selectedSemester =
        document.getElementById("semesterDropdown").value;

      // Save the selected semester to local storage
      localStorage.setItem("semester", selectedSemester);
      displayInfo(savedUsername, selectedSemester);
      // Call the function to update the list based on the selected semester
      updateListBasedOnSemester(selectedSemester);

      // For demonstration, alert the user with the selected semester
      // alert(`Semester ${selectedSemester} selected!`);
    });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Function to update the list based on the selected semester
  function updateListBasedOnSemester(semester) {
    switch (semester) {
      case "1":
        // Code for first semester
        createListItems(firstSem);
        break;

      case "2":
        // Code for the second semester
        createListItems(secondSem);
        break;

      case "3":
        // Code for third semester
        createListItems(thirdSem);
        break;

      case "4":
        // Code for fourth semester
        createListItems(fourthSem);
        break;

      case "5":
        // Code for fifth semester
        createListItems(fifthSem);
        break;

      case "6":
        // Code for sixth semester
        createListItems(sixthSem);
        break;

      case "7":
        // Code for seventh semester
        createListItems(seventhSem);
        break;

      case "8":
        // Code for eighth semester
        createListItems(eightSem);
        break;

      default:
        // Display a message for semesters other than 1, 2, 3, ..., 8
        const noAvailableMessage = document.createElement("li");
        noAvailableMessage.innerHTML =
          "<span class='text-danger'> No subjects available for the current semester. </span>";
        listContainer.appendChild(noAvailableMessage);
        // listContainerMob.appendChild(noAvailableMessage);
        break;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const hasSubListItems = document.querySelectorAll(".has-sub-list");

    hasSubListItems.forEach((item) => {
      const iconElement = item.querySelector("i");

      item.addEventListener("click", function () {
        const subList = this.querySelector(".sub-list");
        subList?.classList.toggle("show-sub-list");
        item.classList.toggle("expanded"); // Add or remove the 'expanded' class
        iconElement?.classList.toggle("fa-chevron-up");
        iconElement?.classList.toggle("fa-chevron-down");

        // Capture and alert the text content only for specific elements
        if (
          item.classList.contains("has-sub-list") ||
          item.classList.contains("sub-list")
        ) {
          const clickedValue = this.textContent.trim();
          // console.log(clickedValue);

          const sliderHighlightImage = document.getElementById(
            "sliderHighlightImage"
          );

          const urls = {
            DS_MATH_2078_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/DiscreteMath/2078/ds-2078-",
            DS_MATH_2076_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/DiscreteMath/2076/ds-2076-",
            DS_MATH_2075_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/DiscreteMath/2075/ds-2075-",

            OOP_2078_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/OOP/2078/oop-2078-",
            OOP_2076_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/OOP/2076/oop-2076-",
            OOP_2075_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/OOP/2075/oop-2075-",

            Mathematics_II_2078_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/Maths-II/2078/Maths-II-2078-",
            Mathematics_II_2076_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/Maths-II/2076/Maths-II-2076-",
            Mathematics_II_2075_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/Maths-II/2075/Maths-II-2075-",

            MicroProcessor_2078_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/Microprocessor/2078/microprocessor-2078-",
            MicroProcessor_2076_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/Microprocessor/2076/microprocessor-2076-",
            MicroProcessor_2075_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/Microprocessor/2075/microprocessor-2075-",

            STATISTICS_I_2078_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/STAT-I/2078/STATS-I-2078-",
            STATISTICS_I_2076_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/STAT-I/2076/STATS-I-2076-",
            STATISTICS_I_2075_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/secondSemester/STAT-I/2075/STATS-I-2075-",

            DSA_2077_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/thirdSemester/DSA/2077/DSA-2077-",
            DSA_2078_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/thirdSemester/DSA/2078/DSA-2078-",

            CG_2075_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/thirdSemester/CG/2075/CG-2075-",
            CG_2077_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/thirdSemester/CG/2077/CG-2077-",

            CA_2078_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/thirdSemester/CA/2078/CA-2078-",
            CA_2077_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/thirdSemester/CA/2077/CA-2077-",

            NM_2075_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/thirdSemester/NM/2075/NM-2075-",
            NM_2077_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/thirdSemester/NM/2077/NM-2077-",

            STATS_II_2075_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/thirdSemester/STATS-II/2075/STATS-II-2075-",
            STATS_II_2077_BS_TU:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/pastyearsolutions/thirdSemester/STATS-II/2077/STATS-II-2077-",

            Chapter_1:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/notes/4thSem/TOC/TheoryofComputationHandwrittennotes/Chapter-1/CH-1-",
            Chapter_2:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/notes/4thSem/TOC/TheoryofComputationHandwrittennotes/Chapter-2/CH-2-",
            Chapter_3:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/notes/4thSem/TOC/TheoryofComputationHandwrittennotes/Chapter-3/CH-3-",
            Chapter_4:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/notes/4thSem/TOC/TheoryofComputationHandwrittennotes/Chapter-4/CH-4-",
            Chapter_5:
              "https://raw.githubusercontent.com/yana-music/CSITSolution/main/notes/4thSem/TOC/TheoryofComputationHandwrittennotes/TM-Complexity-Classes-Numericals/TOC-Notes-",
          };
          let baseImageUrl;
          let imageArray = [];

          document.getElementById("buttonss").style.display = "none";
          document.getElementById("closeFullscreenBtn").style.display = "none";
          document.getElementById("fullscreenContainer").style.display = "none";
          document.getElementById("whole-Slider").style.display = "none";
          document.getElementById("slider").style.display = "none";

          // section for loader hide and show
          function showLoading() {
            document.getElementById("loader").style.display = "block";
            document.getElementById("loaders").style.display = "block";
            document.getElementById("ifram").style.display = "none";
            document.getElementById("sliderImage").style.display = "none";
            document.getElementById("sliderHighlightImage").style.display =
              "none";
            document.getElementById("buttonss").style.display = "none";
            document.getElementById("closeFullscreenBtn").style.display =
              "none";
            document.getElementById("choosensolutionHighLights").style.display =
              "none";
          }

          function hideLoading() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("loaders").style.display = "none";
            document.getElementById("sliderImage").style.display = "block";
            document.getElementById("sliderHighlightImage").style.display =
              "block";
            document.getElementById("choosensolutionHighLights").style.display =
              "block";

            // document.get
          }

          // initailly loading is hidden
          hideLoading();

          async function fetchAndStoreImages(chapter) {
            let baseImageUrl = urls[chapter];
            let imageArray = [];

            let currentIndex = 0;

            while (true) {
              const imageUrl = `${baseImageUrl}${currentIndex + 1}.JPG`;

              try {
                const response = await fetch(imageUrl);

                if (response.status === 404) {
                  break;
                }

                if (response.ok) {
                  const imageURL = imageUrl;
                  imageArray.push(imageURL);
                } else {
                  break;
                }

                currentIndex++;
              } catch (error) {
                break;
              }
            }

            if (imageArray.length > 0) {
              const imageArrayJson = JSON.stringify(imageArray);
              sessionStorage.setItem(chapter, imageArrayJson);
              displayImages(imageArray);
            }
          }

          // Fetch and store images for each chapter when the script runs
          async function fetchAndStoreAllImages() {
            for (const chapter in urls) {
              await fetchAndStoreImages(chapter);
            }
          }

          // Load the imageArray from local storage
          function loadImagesFromLocalStorage(chapter) {
            const imageArrayJson = sessionStorage.getItem(chapter);
            if (imageArrayJson) {
              const parsedArray = JSON.parse(imageArrayJson);
              return [...new Set(parsedArray)];
            }
            return [];
          }

          function displayImages(imageArray) {
            // Clear the existing content in the container (assuming sliderHighlightImage is defined)
            sliderHighlightImage.innerHTML = "";

            if (imageArray.length === 0) {
              // Handle the case when imageArray is empty (no images to display)
              const noImagesMessage = document.createElement("p");
              noImagesMessage.textContent = "No Solutions Available.";
              sliderHighlightImage.appendChild(noImagesMessage);
            } else {
              imageArray.forEach((imageUrl, index) => {
                const img = document.createElement("img");
                img.src = imageUrl;
                img.alt = `Image ${index + 1}`; // Provide an alt attribute for accessibility
                sliderHighlightImage.appendChild(img);
              });
            }
          }

          // Call this function to display images from the imageArray when needed.
          displayImages(imageArray);

          // Function to compare and add a red border
          // Add event listeners for the "Previous" and "Next" buttons
          const prevButton = document.getElementById("prevBtnCustom2");
          const nextButton = document.getElementById("nextBtnCustom2");
          let currentIndex = 0;

          function loadImagesInSlider(index) {
            if (index < 0 || index >= imageArray.length) {
              // console.error("Invalid image index");
              return;
            }

            const sliderImage = document.getElementById("sliderImage");
            sliderImage.src = imageArray[index];
          }

          prevButton.addEventListener("click", () => {
            currentIndex = Math.max(currentIndex - 1, 0);
            loadImagesInSlider(currentIndex);
            compareAndHighlightImage();
          });

          nextButton.addEventListener("click", () => {
            currentIndex = Math.min(currentIndex + 1, imageArray.length - 1);
            loadImagesInSlider(currentIndex);
            compareAndHighlightImage();
          });

          // Initialize the slider with the first image
          loadImagesInSlider(currentIndex);

          // Function to compare and add a red border to the matching image
          function compareAndHighlightImage() {
            const sliderImage = document.getElementById("sliderImage");
            const images = document.querySelectorAll(
              "#sliderHighlightImage img"
            );

            images.forEach((img) => {
              if (img.src === sliderImage.src) {
                // If the src attributes match, add a red border to the image
                img.style.border = "2px solid red";
                sliderImage.style.border = "2px solid #fff";
              } else {
                // If the src attributes don't match, remove the red border (if it was previously set)
                img.style.border = "none";
              }
            });
          }

          fetchAndStoreImages();

          const liElements = document.querySelectorAll("li");

          liElements.forEach((li) => {
            li.addEventListener("click", async (event) => {
              const liValue = event.target.textContent.trim();
              const variableName = liValue.split(" ").join("_");

              if (urls[variableName]) {
                sessionStorage.removeItem("imageArray");

                showLoading();

                document.getElementById("loaders").style.display = "block";
                document.getElementById("loader").style.display = "block";
                imageArray = [];

                baseImageUrl = urls[variableName];

                try {
                  const existingImageArray =
                    loadImagesFromLocalStorage(variableName);

                  if (existingImageArray.length > 0) {
                    imageArray = existingImageArray;
                  } else {
                    await fetchAndStoreImages(variableName);

                    imageArray = loadImagesFromLocalStorage(variableName);
                  }

                  loadImagesInSlider(0);
                  displayImages(imageArray);
                  compareAndHighlightImage();
                  document.getElementById(
                    "choosensolutionHighLights"
                  ).textContent = `${liValue}`;
                  document.getElementById("buttonss").style.display = "block";
                  document.getElementById("closeFullscreenBtn").style.display =
                    "block";
                  document.getElementById("whole-Slider").style.display =
                    "block";
                  document.getElementById("slider").style.display = "block";
                  document.getElementById("fullscreenContainer").style.display =
                    "block";
                  hideLoading();
                  document.getElementById("loader").style.display = "none";
                  document.getElementById("loaders").style.display = "none";
                  // ... (rest of the code)
                } catch (error) {
                  console.error("An error occurred:", error);
                } finally {
                  hideLoading();
                  document.getElementById("loader").style.display = "none";
                  document.getElementById("loaders").style.display = "none";
                }
              }
            });
          });
        }
      });
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Call the function to initially set up the list based on the saved semester
  updateListBasedOnSemester(localStorage.getItem("semester"));

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
