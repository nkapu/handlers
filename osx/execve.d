#!/usr/sbin/dtrace -C -s

/*
  Traces all execve() syscall attempts and attemps to print argv[].

  Caution: 64-bit only

  Prints first 12 arguments in argv[].

  int execve(const char *path, char *const argv[], char *const envp[]);

  There will be invalid address errors. This workaround:

   * http://docs.oracle.com/cd/E19253-01/819-5488/gcgkk/index.html
   * http://stackoverflow.com/questions/1198114/why-does-dtrace-give-me-invalid-address-errors-sometimes-but-not-always

  really doesn't help here since execve() overlays the process memory
  image and pointers saves in the entry and not anymore valid at the return.

  Howver, regardless of this limitation we really want to be able
  to monitor low level execve() syscall, and not just higher level
  spawn/exec probes, in order to be sure we catch all execution
  attempts.
  */

#pragma D option quiet

#define FETCH_ARG(index) copyin(self->argv + sizeof(uint64_t) * index, sizeof(uint64_t))
#define GET_ARG(index) *(uint64_t *)(FETCH_ARG(index))

syscall::*execve:entry {

  self->path = arg0;
  self->argv = arg1;

  printf("%Y %s ", walltimestamp, probefunc);
  printf("%s[%d] -> %s", execname, pid, self->path ? copyinstr(self->path) : "<null>");

  ok = self->argv;
  printf(" '%s'", (ok && GET_ARG(0)) ? copyinstr(GET_ARG(0)) : "");
  i = (ok && GET_ARG(0)) ? 1 : 0;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  printf("\n");
}

syscall::*execve:return {
  self->argc = curproc->p_argc;
  self->argv = curproc->p_dtrace_argv;

  printf("%Y %s ", walltimestamp, probefunc);
  printf("%s[%d] [syscall return]", execname, pid);

  ok = self->argv;
  printf(" '%s'", (ok && GET_ARG(0)) ? copyinstr(GET_ARG(0)) : "");
  i = (ok && GET_ARG(0)) ? 1 : 0;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  i = (ok && GET_ARG(i)) ? i + 1 : i;
  printf(" '%s'", (ok && GET_ARG(i)) ? copyinstr(GET_ARG(i)) : "");
  printf("\n");
}
