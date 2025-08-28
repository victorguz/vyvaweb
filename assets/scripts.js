document.addEventListener("DOMContentLoaded", () => {
  Chart.register(ChartDataLabels);

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Features dropdown menu
  const featuresBtn = document.getElementById("features-button");
  const featuresMenu = document.getElementById("features-menu");
  const featuresContainer = document.getElementById(
    "features-dropdown-container"
  );
  if (featuresBtn) {
    featuresContainer.addEventListener("mouseenter", () =>
      featuresMenu.classList.remove("hidden")
    );
    featuresContainer.addEventListener("mouseleave", () =>
      featuresMenu.classList.add("hidden")
    );
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (!mobileMenu.classList.contains("hidden"))
        mobileMenu.classList.add("hidden");
      if (featuresMenu && !featuresMenu.classList.contains("hidden"))
        featuresMenu.classList.add("hidden");

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Scroll Animations
  const animatedSections = document.querySelectorAll(".animated-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  animatedSections.forEach((section) => {
    section.classList.add("fade-in-up");
    observer.observe(section);
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    question.addEventListener("click", () => {
      const isOpen = question.classList.contains("open");

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-question").classList.remove("open");
          otherItem.querySelector(".faq-answer").style.maxHeight = null;
        }
      });

      if (!isOpen) {
        question.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        question.classList.remove("open");
        answer.style.maxHeight = null;
      }
    });
  });

  // Chart.js Interactive Dashboard
  const salesCtx = document.getElementById("salesChart");
  const categoryCtx = document.getElementById("categoryChart");
  const totalRevenueKpi = document.getElementById("total-revenue-kpi");
  const newCustomersKpi = document.getElementById("new-customers-kpi");
  const avgRevenueKpi = document.getElementById("avg-revenue-kpi");

  const mobileTabSales = document.getElementById("mobile-tab-sales");
  const mobileTabCategory = document.getElementById("mobile-tab-category");
  const salesChartWrapper = document.getElementById("sales-chart-wrapper");
  const categoryChartWrapper = document.getElementById(
    "category-chart-wrapper"
  );

  if (mobileTabSales) {
    mobileTabSales.addEventListener("click", () => {
      salesChartWrapper.classList.remove("hidden");
      categoryChartWrapper.classList.add("hidden");
      mobileTabSales.classList.add("bg-[var(--primary)]", "text-white");
      mobileTabSales.classList.remove("bg-white", "text-[var(--dark)]/90");
      mobileTabCategory.classList.add("bg-white", "text-[var(--dark)]/90");
      mobileTabCategory.classList.remove("bg-[var(--primary)]", "text-white");
    });
  }
  if (mobileTabCategory) {
    mobileTabCategory.addEventListener("click", () => {
      categoryChartWrapper.classList.remove("hidden");
      salesChartWrapper.classList.add("hidden");
      mobileTabCategory.classList.add("bg-[var(--primary)]", "text-white");
      mobileTabCategory.classList.remove("bg-white", "text-[var(--dark)]/90");
      mobileTabSales.classList.add("bg-white", "text-[var(--dark)]/90");
      mobileTabSales.classList.remove("bg-[var(--primary)]", "text-white");
    });
  }

  if (
    salesCtx &&
    categoryCtx &&
    totalRevenueKpi &&
    newCustomersKpi &&
    avgRevenueKpi
  ) {
    const formatCurrency = (value) =>
      "$" +
      new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(
        value
      );

    const appData = {
      30: {
        sales: {
          labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4"],
          values: [1200000, 1900000, 1500000, 2500000],
        },
        categories: {
          labels: ["Suscripciones", "Productos", "Servicios"],
          values: [60, 25, 15],
        },
        newCustomers: 42,
      },
      90: {
        sales: {
          labels: ["Mes 1", "Mes 2", "Mes 3"],
          values: [5600000, 7200000, 6800000],
        },
        categories: {
          labels: ["Suscripciones", "Productos", "Servicios"],
          values: [70, 18, 12],
        },
        newCustomers: 118,
      },
    };

    const calculateAndUpdateKpis = (period) => {
      const totalRevenue = appData[period].sales.values.reduce(
        (a, b) => a + b,
        0
      );
      const customers = appData[period].newCustomers;
      const avgRevenue = customers > 0 ? totalRevenue / customers : 0;
      totalRevenueKpi.textContent = formatCurrency(totalRevenue);
      newCustomersKpi.textContent = customers;
      avgRevenueKpi.textContent = formatCurrency(avgRevenue);
    };

    const salesChartConfig = {
      type: "bar",
      data: {
        labels: [],
        datasets: [
          {
            label: "Ingresos (COP)",
            data: [],
            backgroundColor: "rgba(79, 70, 229, 0.8)",
            borderColor: "rgba(79, 70, 229, 1)",
            borderWidth: 1,
            borderRadius: 5,
            barPercentage: 0.8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 30,
            right: 12,
            left: 12,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { display: false },
          },
          x: {
            grid: { display: false },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (context) {
                const value = context.parsed.y;
                const total = context.chart.data.datasets[0].data.reduce(
                  (a, b) => a + b,
                  0
                );
                const percentage =
                  total > 0 ? ((value / total) * 100).toFixed(2) + "%" : "0%";
                return `${formatCurrency(value)} (${percentage})`;
              },
            },
          },
          datalabels: {
            anchor: "end",
            align: "top",
            formatter: (value) =>
              new Intl.NumberFormat("es-CO", {
                notation: "compact",
                compactDisplay: "short",
              }).format(value),
            color: "#475569",
            font: {
              weight: "bold",
              size: 10,
            },
          },
        },
      },
    };
    const categoryChartConfig = {
      type: "doughnut",
      data: {
        labels: [],
        datasets: [
          {
            label: "Ventas por Categoría",
            data: [],
            backgroundColor: [
              "rgba(79, 70, 229, 0.8)",
              "rgba(99, 102, 241, 0.8)",
              "rgba(165, 180, 252, 0.8)",
            ],
            borderColor: "#fff",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom" },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || "";
                if (label) {
                  label += ": ";
                }
                if (context.parsed !== null) {
                  label += context.parsed + "%";
                }
                return label;
              },
            },
          },
          datalabels: {
            formatter: (value) => value + "%",
            color: "#fff",
          },
        },
      },
    };

    const mySalesChart = new Chart(salesCtx, salesChartConfig);
    const myCategoryChart = new Chart(categoryCtx, categoryChartConfig);

    const updateDashboard = (period) => {
      calculateAndUpdateKpis(period);

      const salesValues = appData[period].sales.values;
      const maxSalesValue = Math.max(...salesValues);
      // mySalesChart.options.scales.y.max = maxSalesValue * 1.25; // Removed this line

      mySalesChart.data.labels = appData[period].sales.labels;
      mySalesChart.data.datasets[0].data = salesValues;
      mySalesChart.update();

      myCategoryChart.data.labels = appData[period].categories.labels;
      myCategoryChart.data.datasets[0].data = appData[period].categories.values;
      myCategoryChart.update();
    };

    const chartControls = document.getElementById("chart-controls");
    chartControls.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const period = e.target.dataset.period;
        chartControls
          .querySelectorAll(".chart-btn")
          .forEach((btn) =>
            btn.classList.remove("active", "bg-indigo-600", "text-white")
          );
        e.target.classList.add("active", "bg-indigo-600", "text-white");
        updateDashboard(period);
      }
    });

    updateDashboard("30");
  }

  // POS Cart Demo
  const cartItemsContainer = document.getElementById("pos-cart-items");
  const cartTotalEl = document.getElementById("pos-cart-total");
  const sendLinkBtn = document.getElementById("pos-send-link");
  const posModal = document.getElementById("pos-modal");
  const subscriptionSection = document.getElementById("subscriptions");

  if (cartItemsContainer && cartTotalEl && sendLinkBtn) {
    let cart = [
      {
        name: "Suscripción Premium",
        price: 69900,
        qty: 1,
        isSubscription: true,
      },
    ];

    const formatCurrency = (value) =>
      "$" +
      new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(
        value
      );

    const renderCart = () => {
      const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
      cartTotalEl.textContent = formatCurrency(total);
      sendLinkBtn.disabled = cart.length === 0;
      if (!sendLinkBtn.disabled) {
        sendLinkBtn.classList.add("pulse-glow");
      } else {
        sendLinkBtn.classList.remove("pulse-glow");
      }

      if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-[var(--secondary)] text-center pt-16">El carrito está vacío...</p>`;
        return;
      }

      cartItemsContainer.innerHTML = cart
        .map(
          (item, index) => `
            <div class="flex items-center justify-between bg-[var(--light)] p-2 rounded-[var(--button-radius)] cart-item-enter">
              <div class="flex-grow">
                <p class="font-semibold text-sm text-[var(--dark)]">${
                  item.name
                }</p>
                <p class="text-xs text-[var(--secondary)]">${formatCurrency(
                  item.price
                )} ${item.isSubscription ? "/mes" : ""}</p>
              </div>
              <div class="flex items-center gap-2">
                <button data-action="decrease" data-index="${index}" class="px-2 text-lg text-[var(--secondary)]">-</button>
                <span class="font-bold w-4 text-center">${item.qty}</span>
                <button data-action="increase" data-index="${index}" class="px-2 text-lg text-[var(--secondary)]">+</button>
              </div>
            </div>
          `
        )
        .join("");
    };

    const handleQtyChange = (index, amount) => {
      if (cart[index]) {
        cart[index].qty += amount;
        if (cart[index].qty <= 0) {
          cart.splice(index, 1);
        }
        renderCart();
      }
    };

    cartItemsContainer.addEventListener("click", (e) => {
      const target = e.target.closest("button");
      if (!target) return;
      const { action, index } = target.dataset;
      if (action === "increase") {
        handleQtyChange(parseInt(index), 1);
      } else if (action === "decrease") {
        handleQtyChange(parseInt(index), -1);
      }
    });

    sendLinkBtn.addEventListener("click", () => {
      if (cart.length === 0) return;
      sendLinkBtn.disabled = true;
      showModal();
    });

    const showModal = () => {
      posModal.classList.remove("hidden");
      posModal.classList.add("modal-enter-active");
      setTimeout(() => {
        posModal.classList.add("hidden");
        posModal.classList.remove("modal-enter-active");
        cart = [
          {
            name: "Suscripción Premium",
            price: 69900,
            qty: 1,
            isSubscription: true,
          },
        ];
        renderCart();
        startDemo();
      }, 2000);
    };

    const startDemo = () => {
      setTimeout(() => {
        cart.push({
          name: "Bolsa de Granos 250g",
          price: 35000,
          qty: 1,
          isSubscription: false,
        });
        renderCart();
      }, 1500);
      setTimeout(() => {
        sendLinkBtn.click();
      }, 3000);
    };

    const demoObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startDemo();
          demoObserver.unobserve(subscriptionSection);
        }
      },
      { threshold: 0.5 }
    );

    if (subscriptionSection) {
      demoObserver.observe(subscriptionSection);
    }

    renderCart();
  }
});
