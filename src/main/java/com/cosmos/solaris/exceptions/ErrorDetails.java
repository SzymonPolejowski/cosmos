package com.cosmos.solaris.exceptions;

import java.time.LocalDate;

public record ErrorDetails(LocalDate timestamp, String message, String details) {
}
