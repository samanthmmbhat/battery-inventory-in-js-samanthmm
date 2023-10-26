function classifyBatteries(presentCapacities) {
  const classifiedBatteries = {
    healthy: 0,
    exchange: 0,
    failed: 0,
  };

  for (const capacity of presentCapacities) {
    const ratedCapacity = 120; // Rated capacity of a new battery
    const soh = (capacity / ratedCapacity) * 100;

    if (soh > 80 && soh <= 100) {
      classifiedBatteries.healthy++;
    } else if (soh >= 63 && soh <= 80) {
      classifiedBatteries.exchange++;
    } else {
      classifiedBatteries.failed++;
    }
  }

  return classifiedBatteries;
}

// Test the function
function testBatteryClassification() {
  const presentCapacities = [105, 90, 60, 115, 50, 70];
  const result = classifyBatteries(presentCapacities);

  // Asserts
  console.assert(result.healthy === 2, "Expected 2 healthy batteries");
  console.assert(result.exchange === 2, "Expected 2 batteries for exchange");
  console.assert(result.failed === 2, "Expected 2 failed batteries");
}

testBatteryClassification();
