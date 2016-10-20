import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class CalculateTest {

	Calculate calculation = new Calculate();
	int sum = calculation.sum(5);
	int testSum = 120;

	@Test
	public void sum() {
		System.out.println("@Test sum(): " + sum + " = " + testSum);
		assertEquals(sum, testSum);
	}

}